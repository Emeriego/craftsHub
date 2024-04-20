from api.stores.models import Store
from api.categories.models import Category


# Create your models here.
from django.db import models
from django.contrib.auth.models import UserManager, AbstractBaseUser, PermissionsMixin
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.utils import timezone



class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    color = models.CharField(max_length=100)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, related_name="products")
    description = models.TextField(default="regular sample")
    img = models.CharField(max_length=100, default="cam1.jpeg")
    category = models.ForeignKey(Category, default=1, on_delete=models.CASCADE, related_name="products")
    is_featured = models.BooleanField(default=False)
    count_in_stock = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)
    

    def clearData(self):
        Product.objects.all().delete()


    def __str__(self):
        return self.name
