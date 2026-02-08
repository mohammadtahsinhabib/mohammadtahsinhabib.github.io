---
layout: page
icon: fas fa-code
order: 2
published: false 
---

# Projects

Here are some of my personal projects and development work.

<div class="project-grid">
{% for project in site.projects %}
  <div class="project-card">
    {% if project.image %}
      <img src="{{ project.image }}" alt="{{ project.title }}">
    {% endif %}
    <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
    <p>{{ project.description }}</p>
    {% if project.tech_stack %}
      <div class="tech-stack">
        {% for tech in project.tech_stack %}
          <span class="badge">{{ tech }}</span>
        {% endfor %}
      </div>
    {% endif %}
  </div>
{% endfor %}
</div>