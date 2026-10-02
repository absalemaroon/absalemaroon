---
title: Certificates
layout: default
permalink: /certificates/
---

# Certificates

<p class="page-intro">Choose a category to browse the certificates in that collection.</p>

<div class="certificate-category-grid">
  {% assign categories = site.certificate_categories | sort: "title" %}
  {% for category in categories %}
    <a class="certificate-category-card" href="{{ category.url | relative_url }}">
      {% if category.thumbnail %}
        <img src="{{ category.thumbnail | relative_url }}" alt="{{ category.title }} category thumbnail">
      {% endif %}
      <span class="certificate-category-card__body">
        <strong>{{ category.title }}</strong>
        {% if category.description %}<span>{{ category.description }}</span>{% endif %}
        <small>View certificates</small>
      </span>
    </a>
  {% else %}
    <p>No certificate categories have been added yet.</p>
  {% endfor %}
</div>
