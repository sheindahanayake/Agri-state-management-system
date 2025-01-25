from rest_framework import serializers
from .models import *

class SoilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soil
        fields = '__all__'