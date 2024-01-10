
from django.contrib import admin
from django.urls import path
from weather import views  # Import views from the 'weather' app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.weather_widget, name='weather_widget'),  # Use 'weather' app's views
]
