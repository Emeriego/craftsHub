from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import *
# from api.users.models import User
from api.stores.models import Store
from rest_framework.permissions import IsAuthenticated



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createStore(request):
    user = request.user
    data = request.data

    store = Store.objects.create(
        store_owner=user,
        name=data['name'],
        description=data['description'],

    )

    serializer = StoreSerializer(store, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getStore(request, pk):
    store = Store.objects.get(_id=pk)
    serializer = StoreSerializer(store, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def allStores(request):
    stores = Store.objects.all()
    serializer = StoreSerializer(stores, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateStore(request, pk):
    data = request.data
    store = Store.objects.get(_id=pk)

    store.name = data['name']
    store.description = data['description']

    store.save()

    serializer = StoreSerializer(store, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteStore(request, pk):
    store = Store.objects.get(_id=pk)
    store.delete()
    return Response('Store Deleted')

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def uploadImage(request):
#     data = request.data

#     store_id = data['store_id']
#     store = Store.objects.get(_id=store_id)

#     store.image = request.FILES.get('image')
#     store.save()
#     return Response('Image was uploaded')
