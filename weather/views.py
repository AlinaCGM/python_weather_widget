from django.shortcuts import render

def weather_widget(request):
    return render(request, 'weather/weather.html')
