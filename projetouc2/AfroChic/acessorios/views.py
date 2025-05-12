from django.shortcuts import render
from rest_framework import viewsets
from acessorios.serializers import AcessoriosSerializer
from acessorios.models import Acessorios

# Create your views here.
def acessorios(request):
    contexto = {
        'titulo' : 'Afrochic | Acessorios'

    }
    return render(
        request,
        'acessorios/index.html',
        contexto,
    )

# Create your views here.
class AcessoriosViewSet(viewsets.ModelViewSet):
    queryset = Acessorios.objects.all()
    serializer_class = AcessoriosSerializer

def acessorios(request):
    #exibir todos os acessorios
    exibe_acessorios =  {
        'titulo' : 'Afrochic | Acessorios',
        'acessorios': Acessorios.objects.all()

    }
    #Retornar os dados para a pagina
    return render(
        request,
        'acessorios/index.html',
        exibe_acessorios,
    )