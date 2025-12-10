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

# 安装后端依赖
echo "📦 安装后端依赖..."
cd auto_garage
pip install -r requirements.txt

# 数据库初始化
echo "🗄️ 初始化数据库..."
python manage.py migrate --settings=auto_garage_project.settings.prod
python manage.py collectstatic --noinput --settings=auto_garage_project.settings.prod

# 创建超级用户（可选）
read -p "是否创建管理员账户? (y/n): " create_admin
if [ "$create_admin" = "y" ]; then
    python manage.py createsuperuser --settings=auto_garage_project.settings.prod
fi

cd ..

# 生成 Nginx 配置文件
echo "📄 生成 Nginx 配置文件..."
cat > nginx_futureautogarage.conf << EOF
server {
    listen 80;
    server_name futuregarage.net www.futuregarage.net;

    # 前端静态文件
    location / {
        root $PROJECT_DIR/frontend-vite/dist;
        try_files \$uri \$uri/ /index.html;
        
        # 缓存静态资源
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # 后端 API 代理
    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    # 媒体文件代理
    location /media/ {
        proxy_pass http://127.0.0.1:8000;
    }

    # Django 管理后台代理
    location /admin/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
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