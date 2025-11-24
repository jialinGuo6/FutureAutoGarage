from django.shortcuts import render

# Create your views here. index(request, *args, **kwargs):
def index(request):
    return render(request, 'frontend/index.html')