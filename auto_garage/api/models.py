"""
FutureAutoGarage - Data Models
Author: Jialin Guo
Created: 2025-11-03
Description: Database model definitions using Django ORM.
             Defines database table structures, field types, relationships, and constraints.

Models:
    Tire: Tire product inventory and pricing
    TireImage: Tire image storage
"""
from django.db import models
import os
from django.utils.timezone import now
from django.core.validators import MinValueValidator, MaxValueValidator

class Tire(models.Model):
    """Tire product model for inventory and pricing management.
    
    Stores detailed tire specifications, brand information, pricing structure, and inventory status.
    
    Fields:
        tire_type: Winter or all-season tire type
        rim_size: Rim size in inches (14, 15, 16, etc.)
        size: Tire specification (e.g., 185/65R14)
        load_speed: Load/speed rating (e.g., 82H)
        brand: Tire brand (Horizon, Michelin, etc.)
        tread_pattern: Tread pattern model (e.g., HH302)
        sale_price: Individual tire price
        set_of_tire: Set of 4 tires price
        environmental_fee: Environmental processing fee
        total_price: Total price including environmental fee
        install_included: Final price with installation service
        stocked_at: Product stock date (admin only)
    """
    TIRE_TYPE_CHOICES = [
        ('WINTER', 'Winter Tires'),
        ('ALL_SEASON', 'All Season Tires'),
    ]
    tire_type = models.CharField(max_length=20, choices=TIRE_TYPE_CHOICES)
    rim_size = models.IntegerField(validators=[MinValueValidator(10), MaxValueValidator(24)])
    size = models.CharField(max_length=50)
    load_speed = models.CharField(max_length=10)
    brand = models.CharField(max_length=50)
    tread_pattern = models.CharField(max_length=50)
    sale_price = models.DecimalField(max_digits=8, decimal_places=2)
    set_of_tire = models.DecimalField(max_digits=10, decimal_places=2)
    environmental_fee = models.DecimalField(max_digits=6, decimal_places=2, default=4.50)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    install_included = models.DecimalField(max_digits=10, decimal_places=2)
    stocked_at = models.DateTimeField(auto_now_add=True)   

    def __str__(self):
        # Return string representation of the tire for admin display.
        return f"{self.get_tire_type_display()} - {self.brand} {self.size} {self.load_speed} - ${self.sale_price}"
    
    class Meta:
        # Model metadata configuration for default ordering.
        ordering = ['tire_type', 'rim_size', 'size'] 

"""generate tire image storage path"""
def tire_image_upload_path(instance, filename):
    # Get file extension
    ext = filename.split('.')[-1]
    # Generate timestamp for renaming
    timestamp = now().strftime('%Y%m%d_%H%M%S_%f')
    # Choose folder based on tire type
    folder_name = 'WinterTire' if instance.tire.tire_type == 'WINTER' else 'AllSeasonTire'
    # Rename image：rim_size_size_brand_timestamp.ext e.g.: 14_185/65R14_Horizon_20230101_000000_000000.jpg
    new_filename = f"{instance.tire.rim_size}_{instance.tire.size}_{instance.tire.brand.replace('/', '_')}_{timestamp}.{ext}"
    return os.path.join(folder_name, new_filename)

class TireImage(models.Model):
    """models.ForeignKey is used to define foreign keys, related to Tire, 
    on_delete=models.CASCADE means cascade deletion when deleting, related_name='images' means reverse association"""
    tire = models.ForeignKey(Tire, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField( # User/manager upload files
        upload_to=tire_image_upload_path,
        default='default.png'  # Root of the media directory: auto_garage/media
    )
    
    def __str__(self):
        return f"{self.tire.brand} {self.tire.size} {self.tire.load_speed} - Image"
    
    class Meta:
        ordering = ['id']