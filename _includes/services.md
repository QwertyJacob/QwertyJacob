## Services

### Lecturer

{% for lecturer in site.data.services.lecturer %}
-  {{ lecturer.course }} - {{ lecturer.university }}
{% endfor %}

### Teaching Assistant

{% for ta in site.data.services.teaching_assistant %}
- {{ ta.course }} - {{ ta.university }} 
{% endfor %}

### Reviewer for Journals

{% for journal in site.data.services.reviewer_journals %}
- [{{ journal.name }}]({{ journal.link }}) - {{ journal.publisher }}
{% endfor %}

### Reviewer for Conferences

{% for conference in site.data.services.reviewer_conferences %}
- {{ conference.name }} - [{{ conference.link }}]({{ conference.link }})
{% endfor %}

### Projects

{% for project in site.data.services.projects %}
- [{{ project.name }}]({{ project.link }})
    - Description: _{{ project.description }}_
    - Role: **{{ project.role }}**
    - Institution: **{{ project.institution }}**
    - Funding: _{{ project.funding }}_
{% endfor %}

### Guest Lectures

{% for lecture in site.data.services.guest_lectures %}
- {{ lecture.name }} - {{ lecture.venue }} - {{ lecture.institution }} - {{ lecture.date }}
{% endfor %}