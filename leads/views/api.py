# leads.views.api.py

from rest_framework import viewsets, permissions

from leads.models.lead import Lead
from leads.serializers.lead import LeadSerializer


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permissions_classes = [permissions.AllowAny]
