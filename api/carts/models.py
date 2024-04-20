from django.db import models
from api.models import User
from api.products.models import Product

# Create your models here.
from django.db import models
from datetime import datetime
from django.utils.translation import gettext_lazy as _


class Cart(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return str(self.User)




class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, default=1)
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    qty = models.IntegerField()
    added_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return str(self.product)
