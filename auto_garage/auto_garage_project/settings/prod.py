from .base import *

DEBUG = False

# 允许的主机
ALLOWED_HOSTS = [
    'futuregarage.net',
    'www.futuregarage.net',
    'localhost',
    '127.0.0.1',
    '47.252.11.228',  # 服务器公网IP
]

# 数据库配置
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# CORS 配置
CORS_ALLOWED_ORIGINS = [
    "http://futuregarage.net",
    "http://www.futuregarage.net",
    "https://futuregarage.net",
    "https://www.futuregarage.net",
    "http://47.252.11.228",
]

CSRF_TRUSTED_ORIGINS = [
    "http://futuregarage.net",
    "http://www.futuregarage.net", 
    "https://futuregarage.net",
    "https://www.futuregarage.net",
    "http://47.252.11.228",
]

# 静态文件配置
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# 媒体文件配置
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# 安全设置（暂时关闭 HTTPS 强制重定向，等配置 SSL 证书后再开启）
# SECURE_SSL_REDIRECT = True
# SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
# SESSION_COOKIE_SECURE = True
# CSRF_COOKIE_SECURE = True
# SECURE_HSTS_SECONDS = 31536000
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True
# SECURE_HSTS_PRELOAD = True