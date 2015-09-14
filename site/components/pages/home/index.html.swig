{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set image = images | first %}
  {% set menu = menu %}
  {% include '../../project/header/header.html.swig' %}

  {% set article = articles | first %}
  {% include '../../project/hero/hero.html.swig' %}

  {% set article = articles[1] %}
  {% include '../../project/hero-fullscreen/hero-fullscreen.html.swig' %}

  <p>footer</p>
{% endblock %}
