from django.shortcuts import render

# Create your views here.

def sobre(request):
    contexto = {
        'titulo' : 'Afrochic | sobre'
    }
    return render(
        request,
        'sobre/index.html',
        contexto,
    )