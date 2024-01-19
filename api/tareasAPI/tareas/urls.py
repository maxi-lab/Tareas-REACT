from django.urls import path,include
from rest_framework import routers
from tareas import views

router=routers.DefaultRouter()
router.register(r'tarea',views.TareViewSet)

urlpatterns=[
    path('',include(router.urls)),
]