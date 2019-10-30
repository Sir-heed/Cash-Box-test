from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('person', views.PersonViewSet)
router.register('attribute', views.AttributeViewSet)

urlpatterns = [
    path('', include(router.urls))
    ]