{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set image = images | first %}
  {% include '../../project/header/header.html.swig' %}

  {% set article = articles | first %}
  {% include '../../project/hero/hero.html.swig' %}

{% endblock %}
