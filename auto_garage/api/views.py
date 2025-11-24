"""
FutureAutoGarage - API Views

Author: Jialin Guo
Created: 2025-11-03
Last Updated: 2025-11-04
Description: REST API view classes for handling HTTP requests and responses.
             Implements business logic, data validation, and API endpoint behavior.

Views:
    - TireListView: Retrieve tires by type (winter/all-season) with filtering support.
    - TireImagesView: Retrieve images for a specific tire.
    
Dependencies:
    - Django REST Framework generics
    - Tire model and TireSerializer
    - TireImage model and TireImageSerializer
"""
from rest_framework import generics
#from rest_framework.views import APIView
from rest_framework.decorators import action
from .serializers import TireSerializer, TireImageSerializer
from .models import Tire, TireImage

class TireListView(generics.ListAPIView):
    """API view for retrieving tire products with type-based filtering.
    
    Handles GET requests to return tire inventory data filtered by tire type.
    Supports 'winter' and 'all-season' tire type filtering via URL parameters.

    Endpoint:
        GET /api/tires/<tire_type>/
    
    Parameters:
        tire_type (str): URL path parameter specifying tire type filter.
                        Accepted values: 'winter', 'all-season'
    
    Returns:
        Response: JSON array of tire objects matching the filter criteria.
                  Returns empty array if no matching tires or invalid type.
    
    Example:
        GET /api/tires/winter/     -> Returns all winter tires
        GET /api/tires/all-season/ -> Returns all all-season tires
    """
    serializer_class = TireSerializer 
    """
    Use get_queryset to Dynamically filter tires based on URL path parameter.
    
    Business Logic:
        - Filters tires by type: 'WINTER' or 'ALL_SEASON'
        - Returns empty queryset for unsupported tire types
        - Maintains consistency with tire model enum values
    
    Returns:
        QuerySet: Filtered tire objects or empty queryset
    """
    def get_queryset(self):  
        # Map URL parameter values to model field values
        tire_type = self.kwargs.get('tire_type')
        if tire_type == 'winter':
            return Tire.objects.filter(tire_type='WINTER')
        elif tire_type == 'all-season':
            return Tire.objects.filter(tire_type='ALL_SEASON')
        # Return empty queryset for unsupported types to maintain API consistency
        return Tire.objects.none()

class TireImagesView(generics.ListAPIView):
    """根据轮胎ID获取该轮胎的所有图片"""
    serializer_class = TireImageSerializer
    def get_queryset(self):
        # 从URL获取的是轮胎的主键id（比如用户点击了id=1的轮胎）
        # tire_id 是 URL "参数名",设定在urls.py
        tire_id = self.kwargs['tire_id']
         # 查询TireImage表中tire_id字段等于这个主键值的轮胎所有图片
        return TireImage.objects.filter(tire_id=tire_id)