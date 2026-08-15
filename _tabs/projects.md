---
layout: page
icon: fas fa-code
order: 2
published: true
---

# Projects

Here are some of my personal projects and development work.

<div class="project-grid">
{% for project in site.projects %}
  <div class="project-card">
    {% if project.image %}
      <img src="{{ project.image }}" alt="{{ project.title }}">
    {% endif %}
    <div class="project-meta">
      [{{ project.date | default: site.time | date: '%Y-%m-%d %H:%M' }}]
      <span class="level-info">INFO</span>
      {{ project.title }}
      {% if project.tech_stack %}
        {% for tech in project.tech_stack limit: 2 %}
          <span class="project-tag">{{ tech }}</span>
        {% endfor %}
      {% endif %}
    </div>
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
