"""
WSGI config for music_controller project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

env = os.environ.get("DJANGO_ENV", "dev")
os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'auto_garage_project.settings.{env}')
application = get_wsgi_application()
