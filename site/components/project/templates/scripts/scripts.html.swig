{% import "../../../framework/helpers/javascripts/javascripts.swig" as j  %}
{% set scripts = j.javascripts(site.javascripts.footer) %}

{{ scripts | safe }}

</body>
</html>
