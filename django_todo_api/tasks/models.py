from django.db import models

# Create your models here.
class Tasks(models.Model):
    description = models.CharField(max_length=500)
    complete = models.BooleanField(default=False)

    def __str__(self):
        return self.description
