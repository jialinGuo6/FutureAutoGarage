import os
from pathlib import Path
from dotenv import load_dotenv

# load .env
load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent.parent

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')

DEBUG = False   # default False，dev/prod environment variable rewrite here

# ALLOWED_HOSTS uses environment variable
ALLOWED_HOSTS_STR = os.environ.get('DJANGO_ALLOWED_HOSTS', '')
ALLOWED_HOSTS = ALLOWED_HOSTS_STR.split(',') if ALLOWED_HOSTS_STR else []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'corsheaders',
    'rest_framework',
    'import_export',

    # apps
    'api.apps.ApiConfig',
    # 'frontend.apps.FrontendConfig',  # 已迁移到 Vite，注释掉
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'auto_garage_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'auto_garage_project.wsgi.application'
ASGI_APPLICATION = 'auto_garage_project.asgi.application'


# 默认数据库由 dev/prod 覆盖
DATABASES = {}

# Static files
STATIC_URL = '/static/'
# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'frontend/static'),  # 前端已迁移到 Vite
# ]
STATICFILES_DIRS = []  # Vite 前端不需要 Django 静态文件
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': ['rest_framework.permissions.AllowAny'],
}

CORS_ALLOWED_ORIGINS = []
CORS_ALLOW_CREDENTIALS = True

CSRF_TRUSTED_ORIGINS = []
