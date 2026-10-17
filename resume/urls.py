
from django.contrib import admin
from django.urls import path
from portfolio.views import index
from accounts.views import login

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('person', login)
]
