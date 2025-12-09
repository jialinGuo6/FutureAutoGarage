import os

env = os.environ.get('DJANGO_ENV', 'dev')

if env == 'dev':
    from .dev import *
elif env == 'prod':
    from .prod import *
else:
    from .dev import *  # 默认 dev
