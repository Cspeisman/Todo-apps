from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import Tasks
from .forms import TasksForm

# Create your views here.
def index(request):
    data = serializers.serialize('json', Tasks.objects.all())
    return HttpResponse(data, content_type='application/json')

def detail(request, task_id):
    print(request)
    task = Tasks.objects.get(pk=task_id)
    if request.POST:
        form = TasksForm(request.POST, instance=task)
        form.save()
    data = Tasks.objects.filter(pk=task_id)
    serialize_data = serializers.serialize('json', data)
    return HttpResponse(serialize_data, content_type='application/json')
