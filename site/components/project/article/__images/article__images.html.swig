<aside class="article__images">
  <h3>Images</h3>

  {% set image = article.images | first %}
  {% include '../../../framework/structure/figure/figure.html.swig' %}
</aside>
