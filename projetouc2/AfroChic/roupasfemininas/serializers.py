from rest_framework import serializers
from roupasfemininas.models import Roupasfemininas


class RoupasfemininasSerializer(serializers.ModelSerializer):


    class Meta:
        model = Roupasfemininas
        fields = '__all__'