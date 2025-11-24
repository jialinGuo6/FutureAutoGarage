FutureAutoGarage/                    # ✅ Git 仓库根目录
├── .gitignore                       # ✅ 应该在这里
├── requirements.txt                 # ✅ Python依赖清单
├── auto_garage/                     # ✅ Django 项目, 主项目目录（管理配置等）
│   ├── api/                         # ✅ 自建的Django app，里面放模型、视图、序列化等
│   ├── auto_garage_project/         # ✅  
│   ├── frontend/                    # ✅ React + Django app, React 代码目录（结合于Django管理）
│   │   ├── node_modules/            # ❌ 被 .gitignore 排除
│   │   ├── src/                     # ✅
│   │   ├── static/                  # ✅
│   │   └── templates/               # ✅
│   ├── db.sqlite3                   # ❌ 被 .gitignore 排除, SQLite数据库文件
│   └── media/                       # ❌ 被 .gitignore 排除, admin管理员/用户上传媒体文件目录
└── MyNote.txt, ReadMe.txt           # ✅ 备注文档等不影响代码结构的文件


前端页面结构
后端页面结构

