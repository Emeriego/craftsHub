# Generated by Django 5.0.4 on 2024-04-20 05:42

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_product_category_alter_product_store_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='api.category'),
        ),
        migrations.AlterField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 20, 5, 42, 5, 54931, tzinfo=datetime.timezone.utc), verbose_name='date joined'),
        ),
    ]
