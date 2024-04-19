from django.urls import path
from api.wishlist.views import *
# from api.views import getRoutes
# from api.users.views import MyTokenObtainPairView

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('',    getWishItems, name='get-wish-items'),
    path('add/', createWishItem, name='create-wish-item'),
    path('delete/<str:pk>/', deleteWishItem, name='delete-wish-item'),
]
