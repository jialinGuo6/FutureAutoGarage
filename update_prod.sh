#!/bin/bash

echo "🔄 更新生产环境..."

# 检查是否在虚拟环境中
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "⚠️  警告: 建议在虚拟环境中运行"
    echo "   请先执行: source venv/bin/activate"
fi

# 备份当前版本
echo "📦 备份当前版本..."
BACKUP_DIR="backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p $BACKUP_DIR
# 备份整个项目（排除 .git 和 venv）
rsync -av --exclude='.git' --exclude='venv' --exclude='__pycache__' ./ $BACKUP_DIR/
echo "✅ 备份完成: $BACKUP_DIR"

# 停止服务
echo "🛑 停止当前服务..."
./stop_prod.sh

# 拉取最新代码
echo "📥 拉取最新代码..."
git pull origin main

if [ $? -ne 0 ]; then
    echo "❌ Git 拉取失败，恢复备份..."
    # 恢复整个项目
    rm -rf ./* .env 2>/dev/null
    rsync -av $BACKUP_DIR/ ./
    echo "🔄 备份已恢复"
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
    echo "   - 备份位置: $BACKUP_DIR"
    echo "   - 网站: https://futuregarage.net"
else
    echo "❌ 启动失败，恢复备份..."
    rm -rf auto_garage frontend-vite/dist
    cp -r $BACKUP_DIR/* ./
    ./start_prod.sh
    echo "🔄 已回滚到备份版本"
    exit 1
fi