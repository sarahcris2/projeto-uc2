from django.db import models

# Create your models here.

class Acessorios(models.Model):
    id   = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=30)
    foto = models.ImageField()
    descricao = models.TextField(blank=True, null=True)


    def __str__(self):
        return self.titulo