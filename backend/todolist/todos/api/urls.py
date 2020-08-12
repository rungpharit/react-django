from todos.api.views import TodosViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TodosViewSet, basename='todos')
urlpatterns = router.urls