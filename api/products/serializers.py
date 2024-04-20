from rest_framework.serializers import ModelSerializer
from .models import *
from api.stores.serializers import StoreSerializer
from rest_framework import serializers



class ProductSerializer(serializers.ModelSerializer):
    # store = StoreSerializer()  # Embed StoreSerializer within ProductSerializer
    store = serializers.PrimaryKeyRelatedField(queryset=Store.objects.all(), many=False)
    class Meta:
        model = Product
        fields = ['id','name', 'price', 'color', 'created_at', 'img', 'store']
        # fields = '__all__'
