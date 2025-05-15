from rest_framework import serializers
from roupasinfantis.models import Roupasinfantis


class RoupasinfantisSerializer(serializers.ModelSerializer):


    class Meta:
        model = Roupasinfantis
        fields = '__all__'