from django.urls import path
from api.products.views import *
# from api.views import getRoutes
# from api.users.views import MyTokenObtainPairView



urlpatterns = [
    path('',    allCrafts, name='get_products'),
    path('create/', createCraft, name='create_product'),
    path('<str:pk>/', getCraft, name='get_product'),
    path('user/', userCrafts, name='user_products'),
    path('update/<str:pk>/', updateCraft, name='update_product'),
    path('delete/<str:pk>/', deleteCraft, name='delete_product'),
    path('upload/', uploadImage, name='upload_image'),
]
