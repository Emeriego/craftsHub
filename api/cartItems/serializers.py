from rest_framework.serializers import ModelSerializer
from .models import *
from api.products.serializers import ProductSerializer
from api.users.serializers import UserSerializerWithToken
from rest_framework import serializers

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    user = UserSerializerWithToken()
    # user = serializers.CharField(source='user.username', read_only=True)
    class Meta:
        model = CartItem
        fields = ['product', 'user', 'qty', 'added_at']
