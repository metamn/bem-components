<section class="video-example">
  <h3>Video example</h3>

  {% set video = video %}
  {% include '__video/video-example__video.html.swig' %}

  {% set image = video.image %}
  {% include '__image/video-example__image.html.swig' %}
</section>
