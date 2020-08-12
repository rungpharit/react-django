from todos.models import Todos
from .serializers import TodosSerializer


from rest_framework import viewsets

class TodosViewSet(viewsets.ModelViewSet):
  serializer_class = TodosSerializer
  queryset = Todos.objects.all()

