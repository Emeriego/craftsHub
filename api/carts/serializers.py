from rest_framework.serializers import ModelSerializer
from .models import *
from api.users.serializers import UserSerializerWithToken
from rest_framework import serializers


class CartSerializer(serializers.ModelSerializer):
    user = UserSerializerWithToken()
    class Meta:
        model = Cart
        fields = ['user', 'created_at', 'updated_at']
