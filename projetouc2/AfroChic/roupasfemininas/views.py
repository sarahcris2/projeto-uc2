from django.shortcuts import render

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