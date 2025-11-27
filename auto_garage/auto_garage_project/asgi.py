"""
ASGI config for music_controller project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
# Auto choose the cofiguration based on .env file: dev or prod 
env = os.environ.get("DJANGO_ENV", "dev")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'auto_garage_project.settings.{env}')
application = get_asgi_application()
