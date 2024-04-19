from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from api.models import *
from rest_framework.permissions import IsAuthenticated
from rest_framework import status






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
