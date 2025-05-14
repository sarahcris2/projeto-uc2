from django.shortcuts import render
from rest_framework import viewsets
from roupasfemininas.serializers import RoupasfemininasSerializer
from roupasfemininas.models import Roupasfemininas

# Create your views here.
def roupasfemininas(request):
    contexto = {
        'titulo' : 'Afrochic | Roupasfemininas'
    }
    return render(
        request,
        'roupasfemininas/index.html',
        contexto,
    )

class RoupasfemininasViewSet(viewsets.ModelViewSet):
    queryset = Roupasfemininas.objects.all()
    serializer_class = RoupasfemininasSerializer

def roupasfemininas(request):
    #exibir todos os roupasfemininas
    exibe_roupasfemininas =  {
        'titulo' : 'Afrochic | Roupas Femininas',
        'roupasfemininas': Roupasfemininas.objects.all()

    }
    #Retornar os dados para a pagina
    return render(
        request,
        'roupasfemininas/index.html',
        exibe_roupasfemininas,
    )