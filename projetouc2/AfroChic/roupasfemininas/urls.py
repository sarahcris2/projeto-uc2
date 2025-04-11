from django.urls import path
from . import views

urlpatterns = [
    path('', views.roupasfemininas, name='roupasfemininas'),
]