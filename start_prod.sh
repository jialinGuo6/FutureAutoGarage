#!/bin/bash

echo "🚀 启动生产环境服务..."

# 检查是否已经部署
if [ ! -f ".env" ]; then
    echo "❌ 错误: 未找到 .env 文件"
    echo "   请先执行部署: ./deploy_prod.sh"
    exit 1
fi

if [ ! -d "frontend-vite/dist" ]; then
    echo "❌ 错误: 未找到前端构建文件"
    echo "   请先执行: ./update_frontend.sh"
    exit 1
fi

# 检查 Gunicorn 是否已经运行
if [ -f "gunicorn.pid" ]; then
    GUNICORN_PID=$(cat gunicorn.pid)
    if ps -p $GUNICORN_PID > /dev/null 2>&1; then
        echo "⚠️  Gunicorn 已经运行 (PID: $GUNICORN_PID)"
        echo "   如需重启，请先执行: ./stop_prod.sh"
        exit 1
    fi
fi

# 启动 Gunicorn (Django 后端)
echo "启动 Django 后端 (Gunicorn)..."
cd auto_garage

# 启动 Gunicorn
gunicorn auto_garage_project.wsgi:application \
    --bind 127.0.0.1:8000 \
    --workers 3 \
    --timeout 30 \
    --keep-alive 2 \
    --max-requests 1000 \
    --max-requests-jitter 100 \
    --daemon \
    --pid ../gunicorn.pid \
    --access-logfile ../logs/gunicorn_access.log \
    --error-logfile ../logs/gunicorn_error.log \
    --log-level info

if [ $? -eq 0 ]; then
    GUNICORN_PID=$(cat ../gunicorn.pid)
    echo "✅ Django 后端已启动 (PID: $GUNICORN_PID)"
else
    echo "❌ Django 后端启动失败"
    exit 1
fi

cd ..

echo ""
echo "🎉 服务启动完成!"
echo "   - 前端: https://futuregarage.net"
echo "   - API: https://futuregarage.net/api/"
echo "   - 管理后台: https://futuregarage.net/admin/"
echo ""
echo "📄 日志文件:"
echo "   - 访问日志: logs/gunicorn_access.log"
echo "   - 错误日志: logs/gunicorn_error.log"