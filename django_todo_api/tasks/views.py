from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import Tasks

# Create your views here.
def index(request):
    data = serializers.serialize('json', Tasks.objects.all())
    return HttpResponse(data, content_type='application/json')

def detail(request, task_id):
    data = serializers.serialize('json', Tasks.objects.filter(pk=task_id))
    return HttpResponse(data, content_type='application/json')
