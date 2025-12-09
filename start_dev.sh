#!/bin/bash

echo "启动 Vite + Django 开发环境..."

# 启动 Django 后端
echo "启动 Django 后端..."
cd auto_garage
python3 manage.py runserver --settings=auto_garage_project.settings.dev &
DJANGO_PID=$!
echo "Django 后端的进程 ID: $DJANGO_PID"
echo $DJANGO_PID > ../django.pid
# 等待后端启动
sleep 3

# 启动 Vite 前端
echo "启动 Vite 前端..."
cd ../frontend-vite
npm run dev &
VITE_PID=$!
echo "Vite 前端的进程 ID: $VITE_PID"
echo $VITE_PID > ../vite.pid
echo "服务启动完成："
echo "- 前端: http://localhost:3000"
echo "- 后端 API: http://localhost:8000/api/"
echo "- 管理后台: http://localhost:8000/admin/"

wait