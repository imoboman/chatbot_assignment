from django.shortcuts import render

from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return HttpResponse("I love Python!")

def home(request):
   return HttpResponse("<h4>I love Python!</h4>")

def home(request):
    return render(request, 'home.html')

from django.shortcuts import render
from django.http import HttpResponse


def contact(request):
    return HttpResponse('contact view')
