from rest_framework.serializers import ModelSerializer
from .models import *
from api.users.serializers import UserSerializerWithToken
from rest_framework import serializers

class MessageSerializer(serializers.ModelSerializer):
    sender = UserSerializerWithToken()
    receiver = UserSerializerWithToken()
    class Meta:
        model = Message
        fields = ['id', 'sender', 'receiver', 'message', 'created_at', 'updated_at']


