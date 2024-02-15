from django.shortcuts import render , redirect
from django.urls import reverse
from .models import Db
from .form import From , Form_old
# Create your views here.
def index(request):
    return render(request , "master/index.html")
def django_render_partial_header(request):
    return render(request , "header.html")
def django_render_partial_footer(request):
    return render(request , "footer.html")
def about(request):
    return render(request , "master/about.html")
def login(request):
    data = Form_old
    return render(request , "master/login.html" , {
        "data" : data
    })
def target(request):
    if request.method == "POST":
        form = From(request.POST)
        if form.is_valid():
            data = Db(
                username=form.cleaned_data.get("username"),
                email=form.cleaned_data.get("email")
            )
            data.save()
            return redirect(reverse("index"))