from django.shortcuts import render , get_object_or_404
from .models import Products
from django.http import HttpResponse
# Create your views here.
def product(request):
    data = Products.objects.all()
    return render(request , "product/product.html" , {
        "data" : data
    })
def get(request , slug):
    check = get_object_or_404(Products , slug=slug)
    return render(request , "product/detail.html" ,{
        "data" : check
    })