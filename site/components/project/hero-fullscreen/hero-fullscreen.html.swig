<article class="hero-fullscreen">
  <h3>Hero full screen</h3>

  {% set image = article.images | first %}
  {% include '__image/hero-fullscreen__image.html.swig' %}

  {% set article = article %}
  {% include '__text/hero-fullscreen__text.html.swig' %}
</article>
