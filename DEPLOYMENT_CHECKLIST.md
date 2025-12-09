# 🚀 阿里云服务器部署检查清单

## ✅ 部署前验证（本地）

### 1. 项目文件完整性
- [x] 所有脚本文件存在且可执行
  - deploy_prod.sh
  - start_prod.sh
  - stop_prod.sh
  - update_prod.sh
  - rollback_prod.sh
  - start_dev.sh
  - stop_dev.sh

- [x] 关键目录结构完整
  - auto_garage/ (Django后端)
  - frontend-vite/dist/ (前端构建文件)
  - logs/ (日志目录)

- [x] 配置文件
  - README.md (部署文档)
  - requirements.txt (Python依赖)

### 2. 日期格式验证
- [x] README.md 使用 2025年12月
- [x] 所有脚本使用动态日期生成 `$(date +%Y%m%d_%H%M%S)`
- [x] 无硬编码的2024年日期

## 📋 阿里云服务器部署步骤

### 第一步：服务器环境准备
```bash
# 1. 登录阿里云服务器
ssh root@your-server-ip

# 2. 更新系统
sudo apt update && sudo apt upgrade -y

# 3. 安装必要软件
sudo apt install -y python3 python3-pip python3-venv nginx git
```

### 第二步：克隆项目
```bash
# 1. 进入部署目录
cd /home

# 2. 克隆仓库（Git会自动创建 FutureAutoGarage 目录）
git clone https://github.com/jialinGuo6/FutureAutoGarage.git
# 注意：项目路径将是 /home/FutureAutoGarage

# 3. 进入项目目录
cd FutureAutoGarage  # 现在在 /home/FutureAutoGarage

# 4. 验证文件完整性
ls -lh *.sh
ls -d auto_garage frontend-vite/dist logs
```

### 第三步：创建虚拟环境
```bash
# 1. 创建虚拟环境
python3 -m venv venv

# 2. 激活虚拟环境
source venv/bin/activate

# 3. 升级pip
pip install --upgrade pip

# 4. 安装Gunicorn
pip install gunicorn
```

### 第四步：配置环境变量
```bash
# 1. 创建.env文件（如果没有.env.example，手动创建）
cat > .env << 'EOF'
# Django Settings
DEBUG=False
SECRET_KEY=your-secret-key-here-change-this
ALLOWED_HOSTS=futuregarage.net,www.futuregarage.net,your-server-ip

# Database (SQLite3 默认)
DATABASE_NAME=db.sqlite3

# Static Files
STATIC_URL=/static/
MEDIA_URL=/media/

# CORS Settings
CORS_ALLOWED_ORIGINS=https://futuregarage.net,https://www.futuregarage.net
EOF

# 2. 编辑配置
vim .env
# 修改 SECRET_KEY 和 ALLOWED_HOSTS
```

### 第五步：执行部署
```bash
# 1. 确保在虚拟环境中
source venv/bin/activate

# 2. 赋予脚本执行权限（如果需要）
chmod +x *.sh

# 3. 执行部署脚本
./deploy_prod.sh

# 4. 按提示创建管理员账户（可选）
```

### 第六步：配置Nginx
```bash
# 1. 复制Nginx配置
sudo cp nginx_futureautogarage.conf /etc/nginx/sites-available/

# 2. 创建软链接
sudo ln -s /etc/nginx/sites-available/nginx_futureautogarage.conf /etc/nginx/sites-enabled/

# 3. 测试Nginx配置
sudo nginx -t

# 4. 重载Nginx
sudo systemctl reload nginx

# 5. 确保Nginx开机自启
sudo systemctl enable nginx
```

### 第七步：启动服务
```bash
# 1. 启动生产服务
./start_prod.sh

# 2. 检查服务状态
ps aux | grep gunicorn

# 3. 查看日志
tail -f logs/gunicorn_access.log
tail -f logs/gunicorn_error.log
```

### 第八步：域名解析（如果使用域名）
```bash
# 在阿里云控制台配置DNS解析
# A记录: futuregarage.net -> 服务器IP
# A记录: www.futuregarage.net -> 服务器IP
```

### 第九步：配置SSL证书（可选但推荐）
```bash
# 1. 安装Certbot
sudo apt install -y certbot python3-certbot-nginx

# 2. 获取SSL证书
sudo certbot --nginx -d futuregarage.net -d www.futuregarage.net

# 3. 测试自动续期
sudo certbot renew --dry-run
```

## 🔄 日常运维命令

### 查看服务状态
```bash
ps aux | grep gunicorn
systemctl status nginx
```

### 查看日志
```bash
# 实时查看访问日志
tail -f logs/gunicorn_access.log

# 实时查看错误日志
tail -f logs/gunicorn_error.log

# 查看Nginx日志
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 重启服务
```bash
# 重启Django后端
./stop_prod.sh
./start_prod.sh

# 重启Nginx
sudo systemctl restart nginx
```

### 更新代码
```bash
# 更新并自动备份
./update_prod.sh

# 如果更新失败，回滚到备份
./rollback_prod.sh backup_20251229_123456
```

## ⚠️ 常见问题排查

### 1. Gunicorn启动失败
```bash
# 检查端口占用
sudo lsof -i :8000

# 检查Python依赖
pip list | grep -i django

# 手动测试Django
cd auto_garage
python manage.py check --settings=auto_garage_project.settings.prod
```

### 2. Nginx 502错误
```bash
# 检查Gunicorn是否运行
ps aux | grep gunicorn

# 检查Nginx配置
sudo nginx -t

# 查看Nginx错误日志
sudo tail -f /var/log/nginx/error.log
```

### 3. 静态文件404
```bash
# 重新收集静态文件
cd auto_garage
python manage.py collectstatic --noinput --settings=auto_garage_project.settings.prod
```

### 4. 数据库迁移问题
```bash
# 查看迁移状态
cd auto_garage
python manage.py showmigrations --settings=auto_garage_project.settings.prod

# 执行迁移
python manage.py migrate --settings=auto_garage_project.settings.prod
```

## 📞 技术支持

- **项目文档**: README.md
- **Facebook**: https://www.facebook.com/NAPASJ/
- **GitHub**: https://github.com/jialinGuo6/FutureAutoGarage

---

**最后更新**: 2025年12月
**部署环境**: 阿里云 Ubuntu Server
**项目版本**: Django 5.2 + React 19
