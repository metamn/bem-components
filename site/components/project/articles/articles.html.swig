<section class="articles">
  <h3>Articles</h3>

  {% for article in articles %}
    {% include "article/article.html.swig" %}
  {% endfor %}
</section>
