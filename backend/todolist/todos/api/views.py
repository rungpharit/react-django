from rest_framework.generics import ListAPIView,RetrieveAPIView

from todos.models import Todos
from .serializers import TodosSerializer

class TodosListView(ListAPIView) :
  queryset = Todos.objects.all()
  serializer_class = TodosSerializer

class TodoDetailView(RetrieveAPIView):
  queryset = Todos.objects.all()
  serializer_class = TodosSerializer