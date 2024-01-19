from django.contrib import admin
from .models import Tarea

# Register your models here.
class TareaAdmin(admin.ModelAdmin):
    pass
admin.site.register(Tarea,TareaAdmin)