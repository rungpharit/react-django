#from django.urls import path

# from .views import TodosListView, TodosCreateView, TodosUpdateView, TodosDeleteView

# urlpatterns = [
#   path('',TodosListView.as_view()),
#   path('create/',TodosCreateView.as_view()),
#   path('<pk>/update/',TodosUpdateView.as_view()),
#   path('<pk>/delete/',TodosDeleteView.as_view()),
# ]

from todos.api.views import TodosViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TodosViewSet, basename='todos')
urlpatterns = router.urls