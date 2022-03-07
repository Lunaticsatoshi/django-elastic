from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100, db_index=True, null=False, blank=False)
    price = models.DecimalField(decimal_places=10, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.id} - {self.name}"