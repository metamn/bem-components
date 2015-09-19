{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set image = images | first %}
  {% set menu = menu %}
  {% include '../../project/header/header.html.swig' %}

  {% set articles = articles %}
  {% include '__articles/home__articles.html.swig' %}

  {% set video = videos | first %}
  {% include '../../project/video-example/video-example.html.swig' %}

  {% set article = heroes[2] %}
  {% include '../../project/text-clipping-mask-example/text-clipping-mask-example.html.swig' %}

  {% set article = heroes | first %}
  {% include '../../project/hero/hero.html.swig' %}

  {% set article = heroes[1] %}
  {% include '../../project/hero-fullscreen/hero-fullscreen.html.swig' %}

  {% set slides = slides %}
  {% include '../../project/slider/slider.html.swig' %}

  {% set parallax = parallax %}
  {% include '../../project/parallax/parallax.html.swig' %}

  <p>footer</p>
{% endblock %}
