from rest_framework.serializers import ModelSerializer
from api.models import *
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken





        







class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['product', 'qty', 'created_at', 'updated_at']

