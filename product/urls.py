from django.urls import path
from . import views
urlpatterns = [
    path("" , views.product),
    path("<slug>" , views.get , name = "slug")
]