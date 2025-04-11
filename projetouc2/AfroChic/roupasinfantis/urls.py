from django.urls import path
from . import views

urlpatterns = [
    path('', views.roupasinfantis, name='roupasinfantis'),
]