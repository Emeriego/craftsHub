# Generated by Django 5.0.4 on 2024-04-18 15:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_cart_total_price_alter_user_date_joined'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='count_in_stock',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 18, 15, 30, 36, 556540, tzinfo=datetime.timezone.utc), verbose_name='date joined'),
        ),
    ]