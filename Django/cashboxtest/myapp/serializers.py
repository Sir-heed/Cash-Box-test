from rest_framework import serializers
from .models import Attribute, Person

class AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribute
        fields = '__all__'

class PersonSerializer(serializers.ModelSerializer):
    attributes = AttributeSerializer(many=True, read_only=True)
    class Meta:
        model = Person
        fields = ['id','full_name','sur_name','date_of_birth','attributes']