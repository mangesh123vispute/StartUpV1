from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    fullname = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=10, unique=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'fullname', 'phone_number']

    def __str__(self):
        return self.email
