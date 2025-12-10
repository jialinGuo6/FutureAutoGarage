#!/bin/bash

echo "🛑 停止生产环境服务..."

# 停止 Gunicorn
echo "停止 Django 后端 (Gunicorn)..."
if [ -f "gunicorn.pid" ]; then
    GUNICORN_PID=$(cat gunicorn.pid)
    if ps -p $GUNICORN_PID > /dev/null 2>&1; then
        # 停止 Gunicorn 主进程和所有工作进程
        pkill -P $GUNICORN_PID 2>/dev/null
        kill $GUNICORN_PID 2>/dev/null
        echo "✅ Django 后端已停止 (PID: $GUNICORN_PID)"
    else
        echo "ℹ️  Gunicorn 进程已经停止"
    fi
    rm gunicorn.pid
else
    echo "ℹ️  未找到 Gunicorn 进程 ID 文件"
    # 备用方案：按名称查找并停止
    GUNICORN_PIDS=$(pgrep -f "gunicorn.*auto_garage_project.wsgi")
    if [ ! -z "$GUNICORN_PIDS" ]; then
        echo "发现运行中的 Gunicorn 进程，正在停止..."
        echo $GUNICORN_PIDS | xargs kill 2>/dev/null
        echo "✅ Gunicorn 进程已停止"
    fi
fi

echo ""
echo "📝 Nginx 需要手动管理:"
echo "   - 重载配置: sudo systemctl reload nginx"
echo "   - 停止 Nginx: sudo systemctl stop nginx"
echo "   - 移除站点配置: sudo rm /etc/nginx/conf.d/nginx_futureautogarage.conf"
echo ""
echo "🎉 生产环境服务已停止!"