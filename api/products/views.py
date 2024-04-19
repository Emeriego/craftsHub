from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import *
# from api.users.models import User
from .models import Product
from api.stores.models import Store
from rest_framework.permissions import IsAuthenticated
from rest_framework import status


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userCrafts(request):
    user = request.user
    user_stores = Store.objects.filter(owner=user)
    if user_stores.exists():
        user_products = Product.objects.filter(store__in=user_stores)
        serializer = ProductSerializer(user_products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        # Handle the case where the user doesn't own any stores
        return Response([], status=status.HTTP_200_OK)


# @api_view(['GET'])
# def allCrafts(request):
#         products = Product.objects.all()
#         # products = Product.objects.filter(store__store_owner=user)
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     # return Response({'msg': "no token found"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getCraft(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCraft(request):
    # user = request.user
    data = request.data

    store = Store.objects.get(_id=data['store'])

    product = Product.objects.create(
        store=store,
        name=data['name'],
        image=data['image'],
        description=data['description'],
        price=data['price'],
        count_in_stock=data['countInStock'],
        category=data['Category'],
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateCraft(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)

    product.name = data['name']
    product.price = data['price']
    product.description = data['description']
    product.img = data['image']
    product.count_in_stock = data['countInStock']
    product.category = data['Category']

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteCraft(request, pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Product Deleted')

@api_view(['POST'])
def uploadImage(request):
    data = request.data

    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    product.img = request.FILES.get('image')
    product.save()

    return Response('Image was uploaded')
