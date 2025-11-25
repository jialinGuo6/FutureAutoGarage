"""
FutureAutoGarage - API Views
Author: Jialin Guo
Created: 2025-11-03
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
    """Get all images for a specific tire based on the tire ID."""
    serializer_class = TireImageSerializer
    def get_queryset(self):
        # Get the Tire ID (primary key) when user clicks on a tire at table, tire_id is URL "parameter", define it in urls.py
        tire_id = self.kwargs['tire_id']
         # Return all images for the specific tire
        return TireImage.objects.filter(tire_id=tire_id)