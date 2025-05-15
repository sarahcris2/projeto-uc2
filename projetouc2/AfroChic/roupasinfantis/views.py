from django.shortcuts import render
from rest_framework import viewsets
from roupasinfantis.serializers import RoupasinfantisSerializer
from roupasinfantis.models import Roupasinfantis
# Create your views here.
def roupasinfantis(request):
    contexto = {
        'titulo' : 'Afrochic | Roupasinfantis'
    }
    return render(
        request,
        'roupasinfantis/index.html',
        contexto,
    )

class RoupasinfantisViewSet(viewsets.ModelViewSet):
    queryset = Roupasinfantis.objects.all()
    serializer_class = RoupasinfantisSerializer

def roupasinfantis(request):
    #exibir todos os roupasinfantis
    exibe_roupasinfantis =  {
        'titulo' : 'Afrochic | Roupas infantis',
        'roupasinfantis': Roupasinfantis.objects.all()

    }
    #Retornar os dados para a pagina
    return render(
        request,
        'roupasinfantis/index.html',
        exibe_roupasinfantis,
    ) 