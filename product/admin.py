from django.contrib import admin
from . import models
# Register your models here.
class ChangeAdmin(admin.ModelAdmin):
    list_display = ["name" , "price" , "date"]
    prepopulated_fields = {
        "slug" : ["name"]
    }
admin.site.register(models.Products , ChangeAdmin)