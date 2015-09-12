{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set image = images | first %}
  {% include '../../project/header/header.html.swig' %}

{% endblock %}
