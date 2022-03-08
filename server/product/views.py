from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from elasticsearch_dsl import Q
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet
from django_elasticsearch_dsl_drf.filter_backends import SearchFilterBackend

from .models import Product
from .serializers import ProductSerializer, ProductDocumentSerializer
from .documents import ProductDocument

# Create your views here.

class ProductSearchWithESViewSet(APIView):
    """search products via elastic search index"""
    search_document = ProductDocument
    serializer_class = ProductDocumentSerializer
    
    def get(self, request, query):
        try:
            q = Q('multi_match', query=query, fields=['name', 'description'], fuzziness='auto')
            
            search = self.search_document.search().query(q)
            search_response = search.execute()
            
            products_serializer = self.serializer_class(search_response, many=True)
            
            return Response({ 'message': 'Sucessfully retrieved data', 'data': products_serializer.data }, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({ 'message': 'Something went wrong' }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ProductCreateApiView(GenericAPIView):
    """create products via api"""
    serializer_class = ProductSerializer
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            product = serializer.save()
            products = Product.objects.all()
            product_serializer = ProductSerializer(products, many=True)
            return Response({ 'message': 'product created Sucessfully', 'data': product_serializer.data }, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response({ 'message': 'product creation failed', 'data': serializer.errors }, status=status.HTTP_400_BAD_REQUEST)
        
class ProductUpdateApiView(GenericAPIView):
    """update products via api"""
    serializer_class = ProductSerializer
    
    def put(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = self.serializer_class(product, data=request.data, partial=True)
        try:
            serializer.is_valid(raise_exception=True)
            product = serializer.save()
            products = Product.objects.all()
            product_serializer = ProductSerializer(products, many=True)
            return Response({ 'message': 'product updated Sucessfully', 'data': product_serializer.data }, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({ 'message': 'product not found', 'data': {} }, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            print(e)
            return Response({ 'message': 'product update failed', 'data': serializer.errors }, status=status.HTTP_400_BAD_REQUEST)
        
        
class ProductDeleteApiView(GenericAPIView):
    """delete products via api"""
    serializer_class = ProductSerializer
    
    def delete(self, request, pk):
        try:
            product = Product.objects.get(pk=pk)
            product.delete()
            
            products = Product.objects.all()
            product_serializer = ProductSerializer(products, many=True)
            return Response({ 'message': 'product deleted Sucessfully', 'data': product_serializer.data }, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({ 'message': 'product not found', 'data': {} }, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as e:
            print(e)
            return Response({ 'message': 'something went wrong', 'data': {} }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
@api_view(['GET'])
def get_all_products(request):
    """get all products"""
    try:
        products = Product.objects.all()
        product_serializer = ProductSerializer(products, many=True)
        return Response({ 'message': 'all products', 'data': product_serializer.data }, status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({ 'message': 'something went wrong', 'data': {} }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)