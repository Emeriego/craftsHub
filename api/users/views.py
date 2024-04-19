from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from .models import *
from rest_framework.permissions import IsAuthenticated
from rest_framework import status



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        token['username'] = user.username

        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


#use jwt.io to see results of what you are doing
@api_view(['GET'])
def getRoutes(request):

    routes = [
        'api/login',
        'api/login/refresh'
    ]
    return Response(routes)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['username'],
            email=data['email'],
           
        )
        user.set_password(data['password'])
        user.save()

        # Create ExtUser instance
        # ext_user = ExtUser.objects.create(
        #     user=user,
        #     gender=data['gender'],
        #     img=data.get('img', '') # Assuming 'img' is also sent in the request
        # )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'There is a problem with your registration'}
        return Response(message, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializerWithToken(users, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    data = request.data

    user.first_name = data['name']
    user.username = data['username']
    user.email = data['email']
    user.save()

