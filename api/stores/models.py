from django.db import models
from api.models import User

# Create your models here.
from django.db import models
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

class Store(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=250)
    description = models.TextField(default="regular sample")
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="stores")
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    updated_at = models.DateTimeField(default=datetime.now, blank=True)

    
    def __str__(self):
        return self.name
