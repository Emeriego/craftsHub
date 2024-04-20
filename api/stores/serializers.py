from rest_framework.serializers import ModelSerializer
from .models import *
from api.users.serializers import UserSerializerWithToken
from rest_framework import serializers


class StoreSerializer(serializers.ModelSerializer):
    # store_owner = serializers.CharField(source='owner.first_name', read_only=True)
    owner = UserSerializerWithToken()  # Embed StoreSerializer within ProductSerializer

    class Meta:
        model = Store
        fields = ['name', 'owner']  # Add other fields of the Store model as needed
