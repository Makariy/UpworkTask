from django.urls import path

from .views import form_view


urlpatterns = [
    path('gather/', form_view),
]
