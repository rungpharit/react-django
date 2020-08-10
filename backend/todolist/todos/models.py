from django.db import models

# Create your models here.
class Todos(models.Model):
  id = models.AutoField(primary_key=True)
  todo = models.CharField(max_length=120)
  done = models.BooleanField(default=False)

  def __str__(self):
    return self.todo
