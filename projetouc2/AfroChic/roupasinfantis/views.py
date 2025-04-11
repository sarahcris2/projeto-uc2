from django.shortcuts import render

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