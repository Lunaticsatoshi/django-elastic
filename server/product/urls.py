from django.urls import path

from .views import ProductSearchWithESViewSet, get_all_products, ProductCreateApiView, ProductUpdateApiView, ProductDeleteApiView

url_patterns = [
    path('products/', ProductSearchWithESViewSet),
    path('products/all/', get_all_products),
    path('products/create/', ProductCreateApiView.as_view()),
    path('products/<int:pk>/update/', ProductUpdateApiView.as_view()),
    path('products/<int:pk>/delete/', ProductDeleteApiView.as_view()),
]