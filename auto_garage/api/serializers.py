"""
FutureAutoGarage - Serializers

Author: Jialin Guo
Created: 2025-11-03
Last Updated: 2025-11-04
Description: Data serialization and deserialization for REST API endpoints.
             Converts between Python objects and JSON format for client-server communication.

Serializers:
    TireSerializer: Tire model serializer for API data serialization
    TireImageSerializer: Tire image serializer for API data serialization
"""
from rest_framework import serializers
from .models import Tire, TireImage

class TireImageSerializer(serializers.ModelSerializer):
    """Tire image serializer for API data conversion."""
    class Meta:
        model = TireImage
        fields = ('id', 'image')

class TireSerializer(serializers.ModelSerializer):
    """Tire model serializer for API data conversion.
    
    Handles serialization and deserialization of Tire model instances for REST API endpoints.
    """
    #many=True 表示一对多关系，意思是一个轮胎可以有多个图片。 表示只读，通过 Admin 上传
    images = TireImageSerializer(many=True, read_only=True) 
    class Meta:
        #Serializer metadata configuration.
        model = Tire
        fields = ('id', 'tire_type', 'rim_size', 'size', 'load_speed', 'brand', 'tread_pattern', 
                 'sale_price', 'set_of_tire', 'environmental_fee', 'total_price', 'install_included', 
                 'stocked_at', 'images')
