---
layout: default
---


# {{ site.data.cv.name }}

{{ site.data.cv.title }}

## Summary

{{ site.data.cv.summary }}

## Experience

{% for job in site.data.cv.experience %}
### {{ job.position }} - {{ job.company }}
{{ job.duration }}

{% for item in job.description %}
- {{ item }}
{% endfor %}

{% endfor %}

## Skills

{% for skill in site.data.cv.skills %}
- {{ skill }}
{% endfor %}

## Education

{% for edu in site.data.cv.education %}
### {{ edu.degree }}
{{ edu.institution }}, {{ edu.year }}
{% endfor %}

## Projects

{% for project in site.data.cv.projects %}
### {{ project.name }}
{{ project.description }}
{% endfor %}

