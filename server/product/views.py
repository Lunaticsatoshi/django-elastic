from django.shortcuts import render
from rest_framework.views import GenericAPIView
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet
from django_elasticsearch_dsl_drf.filter_backends import SearchFilterBackend

from .models import Product
from .serializers import ProductSerializer, ProductDocumentSerializer
from .documents import ProductDocument

# Create your views here.

class MovieSearchWithESViewSet(DocumentViewSet):
    """search products via elastic search index"""
    document = ProductDocument
    serializer_class = ProductDocumentSerializer
    
    filter_backends = [SearchFilterBackend]
    
    search_fields = [
        'name',
        'description',
    ]
    
    filter_fields = {
        'name': 'name',
    }
