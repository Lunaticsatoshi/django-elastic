from django.conf import settings
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    def handle(self, *args, **options):
        if not User.objects.filter(email=settings.ADMIN_EMAIL).exists():
            User.objects.create_superuser(
                username=settings.ADMIN_EMAIL,
                email=settings.ADMIN_EMAIL,
                password=settings.ADMIN_PASSWORD,
            )
            print('Admin account created successfully')
        else:
            print('Admin account already exists')