#!/bin/bash

# 检查参数
if [ $# -eq 0 ]; then
    echo "❌ 错误: 请指定备份目录"
    echo "用法: ./rollback_prod.sh backup_20241129_123456"
    echo ""
    echo "可用的备份:"
    ls -d backup_* 2>/dev/null || echo "   无可用备份"
    exit 1
fi

BACKUP_DIR=$1

# 检查备份目录是否存在
if [ ! -d "$BACKUP_DIR" ]; then
    echo "❌ 错误: 备份目录 '$BACKUP_DIR' 不存在"
    exit 1
fi

echo "🔄 回滚到备份版本: $BACKUP_DIR"

# 停止当前服务
echo "🛑 停止当前服务..."
./stop_prod.sh

# 备份当前版本（以防回滚失败）
CURRENT_BACKUP="current_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p $CURRENT_BACKUP
cp -r auto_garage $CURRENT_BACKUP/ 2>/dev/null
cp -r frontend-vite $CURRENT_BACKUP/ 2>/dev/null
echo "📦 当前版本已备份到: $CURRENT_BACKUP"

# 恢复备份
echo "📥 恢复备份版本..."
rm -rf auto_garage frontend-vite
cp -r $BACKUP_DIR/* ./

# 重新启动服务
echo "🚀 重新启动服务..."
./start_prod.sh

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 回滚成功!"
    echo "   - 已恢复到: $BACKUP_DIR"
    echo "   - 当前版本备份: $CURRENT_BACKUP"
    echo "   - 网站: http://your-domain.com"
else
    echo "❌ 回滚失败，尝试恢复当前版本..."
    rm -rf auto_garage frontend-vite
    cp -r $CURRENT_BACKUP/* ./
    ./start_prod.sh
    exit 1
fi