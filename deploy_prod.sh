#!/bin/bash

echo "🚀 首次部署生产环境..."

# 项目根目录（自动获取脚本所在目录）
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

# 检查是否在虚拟环境中
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "⚠️  警告: 建议在虚拟环境中运行"
    echo "   请先执行: source venv/bin/activate"
fi

# 检查环境变量文件
if [ ! -f ".env" ]; then
    echo "❌ 错误: 未找到 .env 文件"
    echo "   请复制 .env.example 并配置生产环境变量"
    exit 1
fi

# 检查前端构建文件
if [ ! -d "frontend-vite/dist" ]; then
    echo "❌ 错误: 未找到前端构建文件"
    echo "   请确认 Git 仓库包含 frontend-vite/dist/ 目录"
    exit 1
fi

# 创建必要目录
echo "📁 创建必要目录..."
mkdir -p logs
mkdir -p auto_garage/media


# 安装后端依赖
echo "📦 安装后端依赖..."
cd auto_garage
pip install -r requirements.txt
pip install gunicorn

# 数据库初始化
echo "🗄️ 初始化数据库..."
python manage.py migrate --settings=auto_garage_project.settings.prod

# 设置文件权限
echo "🔒 设置文件权限..."
cd ..
chmod -R 755 logs auto_garage/media 

# 创建超级用户（可选）
read -p "是否创建管理员账户? (y/n): " create_admin
if [ "$create_admin" = "y" ]; then
    cd auto_garage
    python manage.py createsuperuser --settings=auto_garage_project.settings.prod
    cd ..
fi

# 生成 Nginx 配置文件
echo "📄 生成 Nginx 配置文件..."
cat > nginx_futureautogarage.conf << EOF
server {
    listen 443 ssl http2; # 新增：监听 HTTPS 端口
    server_name futuregarage.net www.futuregarage.net;

    # 新增：指定证书路径（就是你刚才安装的）
    ssl_certificate /etc/nginx/ssl/futuregarage.pem;
    ssl_certificate_key /etc/nginx/ssl/futuregarage.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    root /home/FutureAutoGarage/frontend-vite/dist;
    index index.html;

    # 前端静态文件
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 后端 API 代理
    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Django 静态文件（直接通过 Nginx 提供）
    location /static/ {
        alias /home/FutureAutoGarage/auto_garage/staticfiles/;
        autoindex off;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 媒体文件代理
    location /media/ {
        proxy_pass http://127.0.0.1:8000;
    }

    # Django 管理后台代理 
    #proxy_set_header X-Script-Name /admin;
    location /admin/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
 # 新增：HTTP 自动跳转 HTTPS（非常重要，SEO 必须）
server {
    listen 80;
    server_name futuregarage.net www.futuregarage.net;
    return 301 https://$server_name$request_uri; # 永久重定向
}
EOF

echo "✅ Nginx 配置文件已生成: nginx_futureautogarage.conf"
echo ""
echo "🔧 请手动执行以下步骤完成 Nginx 配置:"
echo "   1. sudo cp nginx_futureautogarage.conf /etc/nginx/conf.d/"
echo "   2. sudo nginx -t  # 测试配置"
echo "   3. sudo systemctl reload nginx"
echo ""
echo "🎉 部署完成! 现在可以启动服务:"
echo "   ./start_prod.sh"