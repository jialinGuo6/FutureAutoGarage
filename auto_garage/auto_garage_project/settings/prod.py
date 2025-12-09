from .base import *

DEBUG = False

ALLOWED_HOSTS_STR = os.environ.get('DJANGO_ALLOWED_HOSTS', '')
ALLOWED_HOSTS = ALLOWED_HOSTS_STR.split(',') if ALLOWED_HOSTS_STR else []

# SQLite 虽然可用，但生产建议换 MySQL/PostgreSQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Vite 前端生产环境 CORS 配置
# 修改为你的实际前端域名
CORS_ALLOWED_ORIGINS = [
    "https://futureautogarage.com",  # 修改为你的 Vite 前端域名
    "https://www.futureautogarage.com",
]

CSRF_TRUSTED_ORIGINS = [
    "https://futureautogarage.com",
    "https://www.futureautogarage.com",
]

# 强制 HTTPS
SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
