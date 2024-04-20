from django.db import models
from api.models import User
from api.products.models import Product


# Create your models here.
from django.db import models
from django.contrib.auth.models import UserManager, AbstractBaseUser, PermissionsMixin
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

class WishItem(models.Model):
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    added_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return str(self.product)
