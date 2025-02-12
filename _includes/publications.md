## Publications

{% for pub in site.data.publications %}
### {{ pub.title }}
**{{ pub.authors }}**  
*{{ pub.journal }}*  
{{ pub.details }} ({{ pub.year }})  
{% if pub.link %}[View publication]({{ pub.link }}){% endif %}

{% endfor %}