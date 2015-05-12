from .models import Tasks
from .serializers import TasksSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
# class TaskList(generics.ListCreateAPIView):
#     queryset = Tasks.objects.all()
#     serializer_class = TasksSerializer

class TaskList(APIView):
    def get(self, request, format=None):
        tasks = Tasks.objects.all()
        serializer = TasksSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TasksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            serializer = TasksSerializer(Tasks.objects.all(), many=True)
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer
