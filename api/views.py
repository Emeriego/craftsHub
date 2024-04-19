from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from api.models import *
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


@api_view(['GET'])
def allCrafts(request):
        products = Product.objects.all()
        # products = Product.objects.filter(store__store_owner=user)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    # return Response({'msg': "no token found"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getCraft(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCraft(request):
    user = request.user
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

@api_view(['POST'])
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




# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def createOrder(request):
#     user = request.user
#     data = request.data

#     user = User.objects.get(_id=data['user'])
#     order = Order.objects.create(
#         user=user,
#         paymentMethod=data['paymentMethod'],
#         taxPrice=data['taxPrice'],
#         shippingPrice=data['shippingPrice'],
#         totalPrice=data['totalPrice'],
#     )

#     for i in data['orderItems']:
#         product = Product.objects.get(_id=i['product'])

#         item = OrderItem.objects.create(
#             product=product,
#             order=order,
#             name=product.name,
#             qty=i['qty'],
#             price=i['price'],
#             image=product.img.url,
#         )

#         product.count_in_stock -= item.qty
#         product.save()

#     serializer = OrderSerializer(order, many=False)
#     return Response(serializer.data)
