# from django.db import models

# # Create your models here.
# from django.db import models
# from django.contrib.auth.models import UserManager, AbstractBaseUser, PermissionsMixin
# from datetime import datetime
# from django.utils.translation import gettext_lazy as _
# from django.utils import timezone








# class Order(models.Model):
#     User = models.ForeignKey(User, on_delete=models.CASCADE)
#     total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
#     created_at = models.DateTimeField(default=datetime.now, blank=True)
#     updated_at = models.DateTimeField(default=datetime.now, blank=True)

#     def __str__(self):
#         return str(self.User)
    
# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     qty = models.IntegerField(max_length=1000)
#     created_at = models.DateTimeField(default=datetime.now, blank=True)
#     updated_at = models.DateTimeField(default=datetime.now, blank=True)

#     def __str__(self):
#         return str(self.product)

# class Stock(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     qty = models.IntegerField(max_length=1000)
#     created_at = models.DateTimeField(default=datetime.now, blank=True)
#     updated_at = models.DateTimeField(default=datetime.now, blank=True)



    






# class Transaction(models.Model):
#     type = models.CharField(max_length=100)
#     transaction_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="transactions")
#     status = models.CharField(max_length=100)
#     transact_at = models.DateTimeField(default=datetime.now, blank=True)


# class SoldItem(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE, related_name="Purchases")


    


    






    

