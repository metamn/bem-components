<section class="home__articles">
  <h3>Articles</h3>

  {% for article in articles %}
    {% set article.id = "article-" + loop.index %}
    {% include "../../../project/article/article.html.swig" %}
  {% endfor %}
</section>
