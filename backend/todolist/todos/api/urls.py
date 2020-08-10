from django.urls import path

from .views import TodosListView, TodoDetailView

urlpatterns = [
  path('',TodosListView.as_view())
]