## Experience

{% for job in site.data.cv.experience %}

### {{ job.position }} - {{ job.company }}
{{ job.duration }}

{% for item in job.description %}
- {{ item }}
{% endfor %}

{% endfor %}

