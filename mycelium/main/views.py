from django.shortcuts import redirect, render
from django.http import HttpRequest
from .forms import *
from django.views.generic import ListView, DetailView, CreateView
from django.urls import reverse_lazy

def index(request):
    return render(request, 'main/index.html')

def mew(request):
    return render(request, 'main/mew.html')

def game(request):
    return render(request, 'main/Game.html')

def register(request):
    if request.method =='POST':
        form = RegisterUserForm(request.POST)
        print(form)
        if form.is_valid():
            form.save()
            return redirect('menu')
        else:
            form=RegisterUserForm()
    print(form)
    return render(request, 'main/form.html', {"form":form})





    
