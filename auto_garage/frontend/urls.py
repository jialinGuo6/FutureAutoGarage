"""
FutureAutoGarage - Frontend URL Configuration
Author: Jialin Guo
Created: 2025-11-03
Description: URL routing configuration for the frontend app.
"""
from django.urls import path
from .views import index
# This file defines the URL patterns for the frontend app. Use 
urlpatterns = [
    path('', index, name='index'), #http://127.0.0.1:8000/ → 主页 Root URL
    #path('all-season-tires/', index, name='all-season-tires'), #http://127.0.0.1:8000/all-season-tires/ → All Season Tires 全季轮胎
    #path('winter-tires/', index, name='winter-tires'), #http://127.0.0.1:8000/winter-tires/ → Winter Tires 冬季轮胎 
    #path('car-maintenance/', index, name='car-maintenance'), #http://127.0.0.1:8000/car-maintenance/ → Car Maintenance 汽车维修
    #path('car-repairs/', index, name='car-repairs'), #http://127.0.0.1:8000/car-repairs/ → Car Repairs 汽车维修
    #path('about/', index, name='about'), #http://127.0.0.1:8000/about/ → Abour Us 关于我们页面
    #path('contact-location/', index, name='contact-location'), #http://127.0.0.1:8000/contact-location/ → Contact Us 联系我们
    #path('faq/', index, name='faq'), #http://127.0.0.1:8000/faq/ → FAQ 常见问题
    #path('product-lights/', index, name='product-lights'), #http://127.0.0.1:8000/product-lights/ → Products Lights 产品页面
    #path('product-rear-view/', index, name='product-rear-view'), #http://127.0.0.1:8000/product-rear-view/ → Product Rear View 产品页面
]
