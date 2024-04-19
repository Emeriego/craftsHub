from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('',    getRoutes),
    path('register/', registerUser, name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='login_refresh'),
    path('allcrafts/', allCrafts, name='allcrafts'),
    path('usercrafts/', userCrafts, name='usercrafts'),

    # path('add_cart_item/', AddCartItemView.as_view(), name='cartItem'),
    # path('signup', signup, name='signup'),
    # path('logout', logout, name='logout'),
    # path('test_token', test_token, name='test_token'),
    # path('refresh', refresh_token, name='refresh_token'),
    # path('usercrafts', userCrafts, name='userCrafts'),
    # path('products', ProductView.as_view(), name="product"),
]
