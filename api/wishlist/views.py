from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import *
# from api.users.models import User
from api.products.models import Product
from api.wishlist.models import WishItem
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createWishItem(request):
    user = request.user
    data = request.data

    product = Product.objects.get(_id=data['product'])
    wish_item = WishItem.objects.create(
        user=user,
        product=product,
    )
    serializer = WishItemSerializer(wish_item, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getWishItems(request):
    user = request.user
    wish_items = WishItem.objects.filter(user=user)
    serializer = WishItemSerializer(wish_items, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteWishItem(request, pk):
    wish_item = WishItem.objects.get(_id=pk)
    wish_item.delete()
    return Response('Wish Item Deleted')
