from django.contrib import admin
from . import models
# Register your models here.
class Change(admin.ModelAdmin):
    list_display = ["username" , "email" , "date"]
    list_filter = ["date"]
admin.site.register(models.Db , Change)