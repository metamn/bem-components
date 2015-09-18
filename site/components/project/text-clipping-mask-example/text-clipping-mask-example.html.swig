<article class="text-clipping-mask-example">
  <h3>Text Clipping Mask</h3>

  {% set image = article.images | first %}
  {% include '__image/text-clipping-mask-example__image.html.swig' %}

  {% set article = article %}
  {% include '__text/text-clipping-mask-example__text.html.swig' %}
</article>
