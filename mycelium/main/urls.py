from django.urls import path
from .views import *

urlpatterns = [
    path('menu',index, name='go'),
    path('popa_hahahaha',mew, name='mew'),
    path('ogoo',game, name='game'),
    path('', register,name='register'),
]
