# FutureAutoGarage 🚗

**English** | [中文](#中文版本)

## Project Overview

FutureAutoGarage is a modern automotive service website built with **Django REST API + Vite React** architecture, providing tire sales, auto repairs, and car maintenance services.

### 🛠 Tech Stack
- **Backend**: Django 5.2 + Django REST Framework + SQLite3
- **Frontend**: React 19 + Vite + Material-UI + Ant Design
- **Architecture**: Frontend-Backend Separation (SPA)

### 📁 Project Structure
```
FutureAutoGarage/
├── auto_garage/                 # Django Backend
│   ├── api/                    # REST API Application
│   ├── auto_garage_project/    # Django Settings
│   ├── media/                  # User Uploaded Files
│   ├── staticfiles/            # Collected Static Files
│   └── manage.py              # Django Management
├── frontend-vite/              # Vite React Frontend
│   ├── src/                    # Source Code (Local Only)
│   ├── public/                 # Static Assets (Local Only)
│   └── dist/                   # Build Output (Git)
├── logs/                       # Server Logs
├── start_dev.sh               # Development Startup Script
├── stop_dev.sh                # Development Stop Script
├── deploy_prod.sh             # Production Deployment Script
├── start_prod.sh              # Production Start Script
├── stop_prod.sh               # Production Stop Script
├── update_prod.sh             # Update Script
├── rollback_prod.sh           # Production Rollback Script

└── README.md                  # This File
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Development Setup

1. **Clone Repository**
```bash
git clone <repository-url>
cd FutureAutoGarage
```

2. **Backend Setup**
```bash
cd auto_garage
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

3. **Frontend Setup**
```bash
cd frontend-vite
npm install
```

4. **Start Development Servers**
```bash
# Use startup script (recommended)
./start_dev.sh

# Or start separately
cd auto_garage && python manage.py runserver --settings=auto_garage_project.settings.dev &
cd frontend-vite && npm run dev
```

### 🌐 Access URLs
- **Frontend**: http://localhost:3000
- **API**: http://localhost:8000/api/
- **Admin Panel**: http://localhost:8000/admin/
- **Production Site**: https://futuregarage.net

## 📊 Features

### Frontend Pages
- **Home** (`/`): Company introduction and services overview
- **Tires**: 
  - All-season tires (`/all-season-tires`)
  - Winter tires (`/winter-tires`)
  - Tread patterns (`/tread-patterns`)
- **Services**:
  - Auto repairs (`/service-repair`)
  - Car maintenance (`/service-maintenance`)
- **Products**:
  - LED headlights (`/product-lights`)
  - Rear view systems (`/product-rear-view`)
- **About** (`/about`): Company information and contact details
- **FAQ** (`/faq`): Frequently asked questions
- **Contact** (`/contact-location`): Location and contact information

### Backend API
- **Tire Management**: CRUD operations for tire inventory
- **Image Management**: Dynamic tire image uploads and retrieval
- **Admin Interface**: Content management system

### SEO Features
- **Meta Tags**: Comprehensive SEO meta tags in index.html
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: XML sitemap at `/sitemap.xml`
- **Robots.txt**: Search engine crawling instructions
- **HTTPS**: SSL certificate with automatic HTTP to HTTPS redirect

## 🔧 Development

### Environment Configuration
- **Development**: `.env.development`
- **Production**: `.env.production`

### Build Commands
```bash
# Development
npm run dev

# Production Build
npm run build:prod

# Local Static Files Collection (Optional)
cd auto_garage
python3 manage.py collectstatic --noinput --settings=auto_garage_project.settings.prod
cd ..

# Preview Production Build
npm run preview
```

## 📦 Production Deployment

### Server Requirements
- **Web Server**: Nginx with SSL/TLS support
- **WSGI Server**: Gunicorn
- **Database**: SQLite3
- **SSL Certificate**: Required for HTTPS
- **Process Manager**: systemd or PM2

### Initial Deployment (Aliyun Server)
```bash
# 1. Clone repository (will create /home/FutureAutoGarage directory)
cd /home
git clone https://github.com/jialinGuo6/FutureAutoGarage.git
cd FutureAutoGarage  # Now in /home/FutureAutoGarage

# 2. Install dependencies
sudo apt update
sudo apt install python3 python3-pip python3-venv nginx

# 3. Create virtual environment
python3 -m venv venv
source venv/bin/activate

# 4. Configure environment file
cp .env.example .env
vim .env  # Edit with production values

# 5. Deploy
./deploy_prod.sh

# 6. Start services
./start_prod.sh
```

### Update Workflow
```bash
# Update all (frontend dist + backend code)
./update_prod.sh

# Rollback if needed
./rollback_prod.sh backup_20251229_123456
```

### Service Management
```bash
# Start production services
./start_prod.sh

# Stop production services
./stop_prod.sh

# View logs
tail -f logs/gunicorn_access.log
tail -f logs/gunicorn_error.log
```

### SEO & Search Engine Optimization

#### Included SEO Features
- **Comprehensive Meta Tags**: Title, description, keywords, author
- **Open Graph Protocol**: Optimized for social media sharing
- **JSON-LD Structured Data**: Business information for search engines
- **XML Sitemap**: All pages indexed at `https://futuregarage.net/sitemap.xml`
- **Robots.txt**: Search engine crawling guidelines
- **HTTPS Enforcement**: Automatic HTTP to HTTPS redirect

#### Submit to Search Engines
1. **Google Search Console**: https://search.google.com/search-console/
   - Add property: `futuregarage.net`
   - Submit sitemap: `https://futuregarage.net/sitemap.xml`
2. **Bing Webmaster Tools**: https://www.bing.com/webmasters/
3. **Verify SEO**: Check `https://futuregarage.net/robots.txt`
## Tire Data
- **winterTire**:
https://docs.google.com/spreadsheets/d/1msRHnS3gKHN1IGNTzDeuursyrTKF4PXoWn_v9cnD-2U/edit?gid=1660833820#gid=1660833820
- **allSeasonTire**:
https://docs.google.com/spreadsheets/d/1K270MJUMYaFQhxAvObNoWePWZf6qRWBvpKeA53lMQ-M/edit?gid=1206133292#gid=1206133292

## 📞 Contact

- **Website**: https://futuregarage.net
- **Facebook**: https://www.facebook.com/NAPASJ/
- **Address**: 529 Rothesay Ave, Saint John, NB E2J 2C6
- **Phone**: +1-506-288-0999
- **Hours**: Monday-Saturday 11:00-17:00
- **Upload Date**: December 2025

---

# 中文版本

## 项目概述

FutureAutoGarage 是一个现代化的汽车服务网站，采用 **Django REST API + Vite React** 架构，提供轮胎销售、汽车维修和保养服务。

### 🛠 技术栈
- **后端**: Django 5.2 + Django REST Framework + SQLite3
- **前端**: React 19 + Vite + Material-UI + Ant Design
- **架构**: 前后端分离 (SPA)

### 📁 项目结构
```
FutureAutoGarage/
├── auto_garage/                 # Django 后端
│   ├── api/                    # REST API 应用
│   ├── auto_garage_project/    # Django 配置
│   ├── media/                  # 用户上传文件
│   ├── staticfiles/            # 收集的静态文件
│   └── manage.py              # Django 管理
├── frontend-vite/              # Vite React 前端
│   ├── src/                    # 源代码（仅本地）
│   ├── public/                 # 静态资源（仅本地）
│   └── dist/                   # 构建输出（Git）
├── logs/                       # 服务器日志
├── start_dev.sh               # 开发启动脚本
├── stop_dev.sh                # 开发停止脚本
├── deploy_prod.sh             # 生产环境部署脚本
├── start_prod.sh              # 生产环境启动脚本
├── stop_prod.sh               # 生产环境停止脚本
├── update_prod.sh             # 更新脚本
├── rollback_prod.sh           # 生产环境回滚脚本
└── README.md                  # 说明文件
```

## 🚀 快速开始

### 环境要求
- Python 3.8+
- Node.js 16+
- npm 或 yarn

### 开发环境搭建

1. **克隆仓库**
```bash
git clone <repository-url>
cd FutureAutoGarage
```

2. **后端设置**
```bash
cd auto_garage
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

3. **前端设置**
```bash
cd frontend-vite
npm install
```

4. **启动开发服务器**
```bash
# 使用启动脚本（推荐）
./start_dev.sh

# 或分别启动
cd auto_garage && python manage.py runserver --settings=auto_garage_project.settings.dev &
cd frontend-vite && npm run dev
```

### 🌐 访问地址
- **前端**: http://localhost:3000
- **API**: http://localhost:8000/api/
- **管理后台**: http://localhost:8000/admin/

## 📊 功能特性

### 前端页面
- **首页**: 公司介绍和服务概览
- **轮胎**: 全季和冬季轮胎目录，支持动态筛选
- **服务**: 汽车维修和保养信息
- **产品**: LED 车灯和后视系统
- **关于**: 公司信息和联系方式
- **FAQ**: 常见问题解答

### 后端 API
- **轮胎管理**: 轮胎库存的增删改查操作
- **图片管理**: 动态轮胎图片上传和检索
- **管理界面**: 内容管理系统

### SEO 优化功能
- **Meta 标签**: index.html 中包含完整的 SEO 元数据
- **Open Graph**: 社交媒体分享优化
- **JSON-LD**: 搜索引擎结构化数据
- **网站地图**: XML sitemap 位于 `/sitemap.xml`
- **Robots.txt**: 搜索引擎爬取指引
- **HTTPS**: SSL 证书及自动 HTTP 到 HTTPS 重定向

## 🔧 开发

### 环境配置
- **开发环境**: `.env.development`
- **生产环境**: `.env.production`

### 构建命令
```bash
# 开发模式
npm run dev

# 生产构建
npm run build:prod

# 本地收集静态文件（可选）
cd auto_garage
python3 manage.py collectstatic --noinput --settings=auto_garage_project.settings.prod
cd ..

# 预览生产构建
npm run preview
```

## 📦 生产环境部署

### 服务器要求
- **Web 服务器**: Nginx 支持 SSL/TLS
- **WSGI 服务器**: Gunicorn
- **数据库**: SQLite3
- **SSL 证书**: HTTPS 必需
- **进程管理**: systemd 或 PM2

### 初始部署（阿里云服务器）
```bash
# 1. 克隆仓库（会创建 /home/FutureAutoGarage 目录）
cd /home
git clone https://github.com/jialinGuo6/FutureAutoGarage.git
cd FutureAutoGarage  # 现在在 /home/FutureAutoGarage

# 2. 安装依赖工具
sudo apt update
sudo apt install python3 python3-pip python3-venv nginx

# 3. 创建虚拟环境
python3 -m venv venv
source venv/bin/activate

# 4. 配置环境文件
cp .env.example .env
vim .env  # 编辑为生产环境配置

# 5. 执行部署
./deploy_prod.sh

# 6. 启动服务
./start_prod.sh
```

### 更新流程
```bash
# 更新所有（前端 dist + 后端代码）
./update_prod.sh

# 如需回滚
./rollback_prod.sh backup_20251229_123456
```

### 服务管理
```bash
# 启动生产服务
./start_prod.sh

# 停止生产服务
./stop_prod.sh

# 查看日志
tail -f logs/gunicorn_access.log
tail -f logs/gunicorn_error.log
```

## 📞 联系方式

- **网站**: https://futuregarage.net
- **Facebook**: https://www.facebook.com/NAPASJ/
- **地址**: 529 Rothesay Ave, Saint John, NB E2J 2C6
- **电话**: +1-506-288-0999
- **营业时间**: 周一至周六 11:00-17:00
- **上传日期**: 2025年12月