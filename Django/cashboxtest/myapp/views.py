from django.shortcuts import render
from rest_framework import viewsets
from .models import Attribute, Person
from .serializers import AttributeSerializer, PersonSerializer

# Create your views here.
class PersonViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Person to be viewed or edited.
    """
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class AttributeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Attribute to be viewed or edited.
    """
    queryset = Attribute.objects.all()
    serializer_class = AttributeSerializer