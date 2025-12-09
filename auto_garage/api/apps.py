"""
FutureAutoGarage - App Configuration

Author: Jialin Guo
Created: 2025-11-03
Description: Django application configuration and initialization settings.
             Defines app metadata, default field types, and startup behavior.

App Config:
    ApiConfig: Main API application configuration
"""

from django.apps import AppConfig


class ApiConfig(AppConfig):
    """Django application configuration for the API app. 
    
    Configures default field types and application metadata.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'
