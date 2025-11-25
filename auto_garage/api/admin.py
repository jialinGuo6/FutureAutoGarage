"""
FutureAutoGarage - Admin Configuration

Author: Jialin Guo
Created: 2025-11-03
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
# TireImageInline can be used to display TireImage in TireAdmin, for example, displaying 4 image upload boxes in TireAdmin
class TireImageInline(admin.TabularInline):
    model = TireImage
    extra = 4  # default show 4 image upload boxes
    # max_num = 5   # optional: limit the maximum number of images

@admin.register(Tire)
class TireAdmin(ImportExportModelAdmin):
    # Use resource.py to define the import/export fields
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
    inlines = [TireImageInline]  # Here you can add TireImageInline

# option: register TireImage separately(if you want to manage images separately)
@admin.register(TireImage)
class TireImageAdmin(admin.ModelAdmin):
    list_display = ['tire', 'image', 'id']
    list_filter = ['tire__tire_type', 'tire__brand']