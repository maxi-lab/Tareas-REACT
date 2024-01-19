from rest_framework import serializers
from .models import Tarea
class TraeaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tarea
        fields='__all__'
