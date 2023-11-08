from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='go'),
    path('popa_hahahaha',views.mew, name='mew'),
    path('ogoo',views.game, name='game')
]
