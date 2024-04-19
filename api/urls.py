from django.urls import path, include
from api.users.views import *
from api.products.views import *
from api.crafts.views import *
from api.views import getRoutes
from api.users.views import MyTokenObtainPairView

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('',    getRoutes),
    path('register/', registerUser, name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='login_refresh'),
    path('allcrafts/', allCrafts, name='allcrafts'),
    path('usercrafts/', userCrafts, name='usercrafts'),
    path('stores/', include('api.stores.urls')),
    path('products/', include('api.products.urls')),
    path('carts/', include('api.carts.urls')),
    path('orders/', include('api.orders.urls')),
    path('users/', include('api.users.urls')),
    path('crafts/', include('api.crafts.urls')),
    path('wishlist/', include('api.wishlist.urls')),
    path('messages/', include('api.messages.urls')),
    path('categories/', include('api.categories.urls')),


]
