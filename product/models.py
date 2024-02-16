from django.db import models
# Create your models here.
from django.utils.text import slugify


class Products(models.Model):
    title = models.CharField(max_length=30 ,verbose_name="سربرگ")
    name = models.CharField(max_length=30 , verbose_name="نام محصول")
    description = models.CharField(max_length=500 , verbose_name="توضیحات")
    price = models.IntegerField(verbose_name="قیمت محصول")
    date = models.DateField(auto_now_add=True , null=True)
    link_img =models.CharField(max_length=50 , verbose_name="لینک محصول" , null=True)
    slug = models.SlugField(default="" , null=True)
    class Meta:
        verbose_name = "محصول"
        verbose_name_plural = "محصولات"
    def __str__(self):
        return f"{self.name} in {self.date}"
    def save(self , *args,**kwargs):
        self.slug = slugify(self.name)
        super().save(*args,**kwargs)