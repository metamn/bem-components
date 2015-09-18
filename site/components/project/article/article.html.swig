<article class="article" {% if article.id %} id="{{ article.id }}" {% endif %}>
  {% if article.title %}
    {% include '__title/article__title.html.swig' %}
  {% endif %}

  {% if article.subtitle %}
    {% include '__subtitle/article__subtitle.html.swig' %}
  {% endif %}

  {% if article.excerpt %}
    {% include '__excerpt/article__excerpt.html.swig' %}
  {% endif %}

  {% if article.images %}
    {% include '__images/article__images.html.swig' %}
  {% endif %}

  {% if article.date %}
    {% include '__date/article__date.html.swig' %}
  {% endif %}

  {% if article.categories %}
    {% include '__categories/article__categories.html.swig' %}
  {% endif %}

  {% if article.authors %}
    {% include '__authors/article__authors.html.swig' %}
  {% endif %}

  {% if article.content %}
    {% include '__content/article__content.html.swig' %}
  {% endif %}
</article>
