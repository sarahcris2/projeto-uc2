from rest_framework import serializers
from acessorios.models import Acessorios


class AcessoriosSerializer(serializers.ModelSerializer):


    class Meta:
        model = Acessorios
        fields = '__all__'