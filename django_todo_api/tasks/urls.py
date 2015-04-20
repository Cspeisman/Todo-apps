from django.conf.urls import url
from . import views

urlpatterns = [
    # ex: /tasks/
    url(r'^$', views.index),
    # ex: /tasks/4
    url(r'^(?P<task_id>[0-9]+)/$', views.detail),
]
