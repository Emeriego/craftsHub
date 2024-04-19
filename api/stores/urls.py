from django.urls import path
from api.stores.views import *
# from api.views import getRoutes
# from api.users.views import MyTokenObtainPairView



urlpatterns = [
    path('',    allStores, name='all_stores'),
    path('create/', createStore, name='create_store'),
    path('<str:pk>/', getStore, name='get_store'),
    path('update/<str:pk>/', updateStore, name='update_store'),
    path('delete/<str:pk>/', deleteStore, name='delete_store'),
]
