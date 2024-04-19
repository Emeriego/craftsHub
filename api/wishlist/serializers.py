from rest_framework.serializers import ModelSerializer
from .models import *
from rest_framework import serializers


class WishItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishItem
        fields = ['product', 'added_at']
