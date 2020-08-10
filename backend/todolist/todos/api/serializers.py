from rest_framework import serializers

from todos.models import Todos

class TodosSerializer(serializers.ModelSerializer):
  class Meta:
    model = Todos
    fields = ('id','todo','done')