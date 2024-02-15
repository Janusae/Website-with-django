from django.db import models

# Create your models here.
class Db(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField()
    date = models.DateField(auto_now_add=True , null=True)
    class Meta:
        verbose_name= "اطلاعات ورود"
        verbose_name_plural = "اطلاعات ورود"