"""
FutureAutoGarage - backend URL Configuration
Author: Jialin Guo
Created: 2025-11-03
Description: URL routing configuration.

Endpoints:
    /tires/<tire_type>/: Tire product API endpoints. 
    /tires/<int:tire_id>/images/: Tire image API endpoints.
"""
from django.urls import path
from .views import TireListView, TireImagesView

# URL patterns for the API app
# Maps the root URL to the main() function at the views.py file.
#path('', main), # (http://localhost:8000/api)
urlpatterns = [
    # Tire API endpoints
    path('tires/<str:tire_type>/', TireListView.as_view(), name='tire_list'),  # GET: Retrieve tires by type
    path('tires/<int:tire_id>/images/', TireImagesView.as_view(), name='tire_images'), # GET: Retrieve images for a specific tire, tire_id is the primary key
]
