from django.urls import path
from api.carts.views import *
# from api.views import getRoutes
# from api.users.views import MyTokenObtainPairView



urlpatterns = [
    path('',    allCarts, name='all_carts'),
    path('create/', createCart, name='create_cart'),
    path('<str:pk>/', getCart, name='get_cart'),
    path('delete/<str:pk>/', deleteCart, name='delete_cart'),
    path('getitems/<str:pk>/', getCartItems, name='get_cart_items'),
    path('deleteitem/<str:pk>/', deleteCartItem, name='delete_cart_item'),
    path('updateitem/<str:pk>/', updateCartItem, name='update_cart_item'),

]
