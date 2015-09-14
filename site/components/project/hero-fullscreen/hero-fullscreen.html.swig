{% set image = article.images | first %}

<article data-image="{{ site.url }}{{ site.images }}{{ image.name }}" class="hero-fullscreen">
  <h3>Hero full screen</h3>

  {% set article = article %}
  {% include '__text/hero-fullscreen__text.html.swig' %}
</article>
