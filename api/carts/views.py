from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import *
# from api.users.models import User
from api.products.models import Product
from .models import Cart, CartItem
from rest_framework.permissions import IsAuthenticated



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCart(request):
    user = request.user
    data = request.data

    user = User.objects.get(_id=data['user'])
    cart = Cart.objects.create(
        user=user,
    )

    for i in data['cartItems']:
        product = Product.objects.get(_id=i['product'])

        item = CartItem.objects.create(
            product=product,
            cart=cart,
            name=product.name,
            qty=i['qty'],
            price=i['price'],
            image=product.img.url,
        )

        product.count_in_stock -= item.qty
        product.save()

    serializer = CartSerializer(cart, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCart(request, pk):
    cart = Cart.objects.get(_id=pk)
    serializer = CartSerializer(cart, many=False)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCartItems(request, pk):
    cart = Cart.objects.get(_id=pk)
    items = CartItem.objects.filter(cart=cart)
    serializer = CartItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteCartItem(request, pk):
    item = CartItem.objects.get(_id=pk)
    item.delete()
    return Response('Item was deleted')


