from django.db import models

# Create your models here.
class Person(models.Model):
    full_name = models.CharField(max_length=70)
    sur_name = models.CharField(max_length=70)
    date_of_birth = models.DateField()

class Attribute(models.Model):
    key = models.CharField(max_length=20)
    value = models.CharField(max_length=10)
    person = models.ForeignKey(Person,on_delete=models.CASCADE,blank=True, null=True,related_name='attributes')