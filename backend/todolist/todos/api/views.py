# from rest_framework.generics import ListAPIView,CreateAPIView,UpdateAPIView,DestroyAPIView

from todos.models import Todos
from .serializers import TodosSerializer

# class TodosListView(ListAPIView) :
#   queryset = Todos.objects.all()
#   serializer_class = TodosSerializer

# class TodosCreateView(CreateAPIView) :
#   queryset = Todos.objects.all()
#   serializer_class = TodosSerializer

# class TodosUpdateView(UpdateAPIView) :
#   queryset = Todos.objects.all()
#   serializer_class = TodosSerializer

# class TodosDeleteView(DestroyAPIView) :
#   queryset = Todos.objects.all()
#   serializer_class = TodosSerializer

from rest_framework import viewsets

class TodosViewSet(viewsets.ModelViewSet):
  serializer_class = TodosSerializer
  queryset = Todos.objects.all()

