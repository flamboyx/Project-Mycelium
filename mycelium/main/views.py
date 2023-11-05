from django.shortcuts import render
from django.http import HttpRequest

def index(request):
    return render(request, 'main/index.html')

def mew(request):
    return render(request, 'main/mew.html')

    
