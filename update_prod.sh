#!/bin/bash

echo "🔄 更新生产环境..."

# 检查是否在虚拟环境中
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "⚠️  警告: 建议在虚拟环境中运行"
    echo "   请先执行: source venv/bin/activate"
fi

# 停止服务
echo "🛑 停止当前服务..."
./stop_prod.sh

# 拉取最新代码
echo "📥 拉取最新代码..."
git pull origin main

if [ $? -ne 0 ]; then
    echo "❌ Git 拉取失败"
    exit 1
fi

# 安装后端依赖
echo "📦 更新后端依赖..."
cd auto_garage
pip install -r requirements.txt
python manage.py migrate --settings=auto_garage_project.settings.prod
python manage.py collectstatic --noinput --settings=auto_garage_project.settings.prod
cd ..

# 重新启动服务
echo "🚀 重新启动服务..."
./start_prod.sh

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 更新部署成功!"
    echo "   - 网站: http://futuregarage.net"
else
    echo "❌ 启动失败"
    exit 1
fi