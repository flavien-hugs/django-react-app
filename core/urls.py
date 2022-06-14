# core.urls.py

from django.contrib import admin
from django.urls import path, include

from leads.router import router

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
