#!/bin/bash

echo "📦 本地构建静态文件..."

# 创建必要目录
mkdir -p auto_garage/staticfiles

# 进入后端目录
cd auto_garage

# 收集静态文件
echo "🗂️ 收集 Django 静态文件..."
python3 manage.py collectstatic --noinput --settings=auto_garage_project.settings.prod

cd ..

echo "✅ 本地构建完成!"
echo "   - Django 静态文件: auto_garage/staticfiles/"
echo "   - 前端构建文件: frontend-vite/dist/"
echo ""
echo "现在可以提交到 Git 并部署到服务器"