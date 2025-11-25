"""
FutureAutoGarage - Import Export Resources
Author: Jialin Guo
Created: 2025-11-20
Description: Import Export Resources
             Defines the resource for the Tire model and its fields.
             Enables data import and export functionality for the Tire model.

Resource: is imported in admin.py. It defines how data is imported and exported by rewriting the Meta class and adding custom methods.
    ○ Customize import/export fields (e.g., specify the order, export only certain fields)
    ○ Handle complex fields such as ForeignKey, ManyToMany, or customize import logic
    ○ Configure rules to skip duplicate/unique checks or data cleaning during import.
"""
from import_export import resources
from .models import Tire

class TireResource(resources.ModelResource):
    class Meta:
        model = Tire
        # Here you can customize fields, import settings, etc.
        fields = ('id', 'tire_type', 'rim_size', 'size', 'load_speed', 'brand', 'tread_pattern', 
                  'sale_price', 'set_of_tire', 'environmental_fee', 'total_price', 'install_included', 
                  'stocked_at')
        # Export order of fields
        export_order = fields