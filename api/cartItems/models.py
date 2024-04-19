from django.db import models
from api.products.models import Product
from api.carts.models import Cart

# Create your models here.
from datetime import datetime
from django.utils.translation import gettext_lazy as _


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, default=1)
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    qty = models.IntegerField()
    added_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return str(self.product)
