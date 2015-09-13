<article class="hero">
  <h3>Hero</h3>

  {% set image = article.images | first %}
  {% include '__image/hero__image.html.swig' %}

  {% set article = article %}
  {% include '__text/hero__text.html.swig' %}
</article>
