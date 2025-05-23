"""
URL configuration for AfroChic project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.contrib.auth.views import LoginView

from django.conf import settings
from rest_framework import routers
from acessorios.views import AcessoriosViewSet
from roupasfemininas.views import RoupasfemininasViewSet
from roupasinfantis.views import RoupasinfantisViewSet

router = routers.DefaultRouter()
router.register('acessorios',AcessoriosViewSet)
router.register('roupasfemininas',RoupasfemininasViewSet)
router.register('roupasinfantis',RoupasinfantisViewSet)

urlpatterns = [
    path('',include('home.urls')),
    path('home/',include('home.urls')),
    path('roupasfemininas/',include('roupasfemininas.urls')),
    path('roupasinfantis/',include('roupasinfantis.urls')),
    path('acessorios/',include('acessorios.urls')),
    path('pedidos/',include('pedidos.urls')),
    path('sobre/',include('sobre.urls')),
    path('admin/', admin.site.urls),
]

#Adicione URLs de autenticação de site Django (para login, logout, gerenciamento de senha)
urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
    path("accounts/", include("accounts.urls")),
]

urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)