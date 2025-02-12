---
layout: default
---

# {{ site.data.cv.name }}
{{ site.data.cv.title }}


## Summary


<div id="skills-section">

  {% capture skills_content %}
  {% include skills.md %}
  {% endcapture %}

  {{ "## Skills" | markdownify }}
  {{ skills_content | markdownify }}
  
</div>

{{ site.data.cv.summary }}

{{ site.data.cv.description }}


{% include experience.md %}

{% include education.md %}



## Projects

{% for project in site.data.cv.projects %}

### {{ project.name }}
{{ project.description }}

{% endfor %}

