# leads.routers.py

from rest_framework import routers

from leads.views.api import LeadViewSet


router = routers.DefaultRouter()
router.register('leads', LeadViewSet, 'leads')

urlpatterns = router.urls
