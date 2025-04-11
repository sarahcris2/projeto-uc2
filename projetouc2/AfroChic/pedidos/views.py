from django.shortcuts import render

# Create your views here.

def pedidos(request):
    contexto = {
        'titulo' : 'Afrochic | Pedidos'
    }
    return render(
        request,
        'pedidos/index.html',
        contexto,
    )