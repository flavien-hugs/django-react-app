# leads.serializers.lead.py

from rest_framework import serializers

from leads.models.lead import Lead


class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = '__all__'
