from rest_framework.serializers import ModelSerializer
from .models import *
from api.products.serializers import ProductSerializer
from api.users.serializers import UserSerializerWithToken
from rest_framework import serializers


class CartSerializer(serializers.ModelSerializer):
    user = UserSerializerWithToken()
    class Meta:
        model = Cart
        fields = ['user', 'created_at', 'updated_at']


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    cart = CartSerializer()
    # user = serializers.CharField(source='user.username', read_only=True)
    class Meta:
        model = CartItem
        fields = ['cart', 'product', 'qty', 'added_at']
