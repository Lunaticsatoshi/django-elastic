from django.urls import path

from .views import ProductSearchWithESViewSet, get_all_products, ProductCreateApiView, ProductUpdateApiView, ProductDeleteApiView

urlpatterns = [
    path('products/<str:query>', ProductSearchWithESViewSet.as_view(), name='product-list'),
    path('products/all/', get_all_products, name='product-list-all'),
    path('products/create/', ProductCreateApiView.as_view(), name='product-create'),
    path('products/<int:pk>/update/', ProductUpdateApiView.as_view(), name='product-update'),
    path('products/<int:pk>/delete/', ProductDeleteApiView.as_view(), name='product-delete'),
]