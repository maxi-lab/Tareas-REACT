from django.shortcuts import render
from rest_framework import viewsets
from .serialziers import TraeaSerializer
from .models import Tarea
# Create your views here.
class TareViewSet(viewsets.ModelViewSet):
    queryset=Tarea.objects.all()
    serializer_class=TraeaSerializer