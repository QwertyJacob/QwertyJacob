## Education

{% for edu in site.data.cv.education %}

### {{ edu.degree }}
{{ edu.institution }}, {{ edu.year }}

{{ edu.thesis }}
{% endfor %}
