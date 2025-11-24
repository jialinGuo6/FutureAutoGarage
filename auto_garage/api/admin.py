"""
FutureAutoGarage - Admin Configuration

Author: Jialin Guo
Created: 2025-11-03
Last Updated: 2025-11-04
Description: Django admin interface configuration for model registration and management.
             Provides web-based administrative interface for database operations.
Admin URL: http://127.0.0.1:8000/admin/

Admin Classes:
    TireAdmin: Tire data management operations.
    TireImageAdmin: Tire image data management operations.
"""
from django.contrib import admin
from .models import Tire, TireImage
from import_export.admin import ImportExportModelAdmin
from .resources import TireResource
# TireImageInline可以用于在TireAdmin中显示TireImage，例如，在TireAdmin中显示4个图片上传框。与下方TireImageAdmin的功能相同
class TireImageInline(admin.TabularInline):
    model = TireImage
    extra = 4  # 默认显示4个图片上传框
    # 可选：限制最大图片数量
    # max_num = 5

@admin.register(Tire)
class TireAdmin(ImportExportModelAdmin):
    resource_class = TireResource
    """Admin interface configuration for Tire model.
    
    Provides comprehensive management interface for tire inventory
    with filtering, searching, and display customization.
    """
    list_display = ['tire_type', 'rim_size', 'size', 'load_speed', 'brand', 'tread_pattern', 
                   'sale_price', 'set_of_tire', 'environmental_fee', 'total_price', 
                   'install_included', 'stocked_at']
    list_filter = ['tire_type', 'rim_size', 'brand', 'stocked_at']
    search_fields = ['size', 'brand', 'tread_pattern']
    ordering = ['tire_type', 'rim_size', 'size']
    inlines = [TireImageInline]  # 添加这行！

# 可选：单独注册 TireImage（如果你想单独管理图片）
@admin.register(TireImage)
class TireImageAdmin(admin.ModelAdmin):
    list_display = ['tire', 'image', 'id']
    list_filter = ['tire__tire_type', 'tire__brand']