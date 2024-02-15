from django import forms

from master.models import Db


class Form_old(forms.Form):
    username = forms.CharField(label="نام کاربری" , widget=forms.TextInput(attrs={
        "placeholder" : "Enter your username"
    }))
    email =forms.EmailField(label="ایمیل" ,widget=forms.EmailInput(attrs={
        "placeholder" : "Enter your email"
    }) )

class From(forms.ModelForm):


    class Meta:
        model = Db
        fields = "__all__"
        exclude = ["date"]
        widgets = {
            "name" : forms.TextInput(attrs={
                "placeholder" : "Enter your username"}),
            "email" : forms.EmailInput(attrs={
                "placeholder" : "Enter your email"
            })
        }

