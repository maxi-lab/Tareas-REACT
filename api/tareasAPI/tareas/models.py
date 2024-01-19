from django.db import models

# Create your models here.

class Tarea(models.Model):
    titulo=models.CharField(max_length=100,default='')
    description=models.CharField(max_length=1000,default='')
    completada=models.BooleanField(default=False)