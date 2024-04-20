from django.contrib import admin
from api.models import *
from api.wishlist.models import *
from api.messages.models import *
from api.categories.models import *
from api.carts.models import *
from api.products.models import *
from api.stores.models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Product)
admin.site.register(Store)
admin.site.register(CartItem)
admin.site.register(WishItem)
admin.site.register(Message)
admin.site.register(Category)


