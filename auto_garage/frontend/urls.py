from django.urls import path
from .views import index
# 这个前端的urls作用是在浏览器中显示，让用户看到
urlpatterns = [
    path('', index, name='index'), #http://127.0.0.1:8000/ → 主页
    path('all-season-tires/', index, name='all-season-tires'), #http://127.0.0.1:8000/all-season-tires/ → 全季轮胎
    path('winter-tires/', index, name='winter-tires'), #http://127.0.0.1:8000/winter-tires/ → 冬季轮胎
    path('car-maintenance/', index, name='car-maintenance'), #http://127.0.0.1:8000/car-maintenance/ → 汽车维修
    path('car-repairs/', index, name='car-repairs'), #http://127.0.0.1:8000/car-repairs/ → 汽车维修
    path('about/', index, name='about'), #http://127.0.0.1:8000/about/ → 关于我们页面
    path('contact-location/', index, name='contact-location'), #http://127.0.0.1:8000/contact-location/ → 联系我们
    path('faq/', index, name='faq'), #http://127.0.0.1:8000/faq/ → 常见问题
    path('product-lights/', index, name='product-lights'), #http://127.0.0.1:8000/product-lights/ → 产品页面
    path('product-rear-view/', index, name='product-rear-view'), #http://127.0.0.1:8000/product-rear-view/ → 产品页面
    
        # 音乐控制器
    #path('create-room/', index, name='create-room'), #http://127.0.0.1:8000/create-room/ → 创建房间
    #path('join-room/', index, name='join-room'), #http://127.0.0.1:8000/join-room/ → 加入房间
    #path('active-rooms/', index, name='active-rooms'), #http://127.0.0.1:8000/active-rooms/ → 活跃房间
    #path('room/<str:code>/', index, name='room'), #http://127.0.0.1:8000/room/ABC123/ → 进入ABC123房间
]
