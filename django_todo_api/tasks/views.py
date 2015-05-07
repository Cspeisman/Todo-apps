from .models import Tasks
from .serializers import TasksSerializer
from rest_framework import generics

class TaskList(generics.ListCreateAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
