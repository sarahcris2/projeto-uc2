from django.shortcuts import render

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