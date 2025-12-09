#!/bin/bash

echo "停止 Vite + Django 开发环境..."

# 停止 Django 后端
echo "停止 Django 后端..."
if [ -f "django.pid" ]; then
    DJANGO_PID=$(cat django.pid)
    if ps -p $DJANGO_PID > /dev/null 2>&1; then
        # 停止父进程和所有子进程
        pkill -P $DJANGO_PID 2>/dev/null
        kill $DJANGO_PID 2>/dev/null
        echo "✅ Django 后端已停止 (PID: $DJANGO_PID)"
    else
        echo "ℹ️  Django 进程已经停止"
    fi
    rm django.pid
else
    echo "ℹ️  未找到 Django 进程 ID 文件"
fi

# 停止 Vite 前端
echo "停止 Vite 前端..."
if [ -f "vite.pid" ]; then
    VITE_PID=$(cat vite.pid)
    if ps -p $VITE_PID > /dev/null 2>&1; then
        # 停止父进程和所有子进程
        pkill -P $VITE_PID 2>/dev/null
        kill $VITE_PID 2>/dev/null
        echo "✅ Vite 前端已停止 (PID: $VITE_PID)"
    else
        echo "ℹ️  Vite 进程已经停止"
    fi
    rm vite.pid
else
    echo "ℹ️  未找到 Vite 进程 ID 文件"
fi

echo "🎉 所有服务已停止"