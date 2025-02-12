---
layout: default
---

# {{ site.data.cv.name }}
{{ site.data.cv.title }}


<div id="skills-section">

  {% capture skills_content %}
  {% include skills.md %}
  {% endcapture %}

  {% capture summary_content %}
  {% include summary.md %}
  {% endcapture %}
  
  {{ "## Summary" | markdownify }}
  {{ summary_content | markdownify }}
  {{ description_content | markdownify }}
  {{ "## Skills" | markdownify }}
  {{ skills_content | markdownify }}
  
</div>

<div id="research-interests-section">

  {% capture research_interests_content %}
  {% include research_interests.md %}
  {% endcapture %}

  {{ "## Research Interests" | markdownify }}
  {{ research_interests_content | markdownify }}

</div>

{% include publications.md %}

{% include experience.md %}


{% include education.md %}



## Projects

{% for project in site.data.cv.projects %}

### {{ project.name }}
{{ project.description }}

{% endfor %}

