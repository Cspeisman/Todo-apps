from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    # ex: /tasks/
    url(r'^$', views.TaskList().as_view()),
    # ex: /tasks/4
    url(r'^(?P<pk>[0-9]+)/$', views.TaskDetail().as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
