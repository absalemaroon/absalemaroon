---
title: Certificates
layout: default
permalink: /certificates/
---

# Certifications

<p class="page-intro">Browse certificates by category.</p>

{% assign certificate_categories = site.certificates | map: "category" | uniq | sort %}
<nav class="certificate-categories" aria-label="Certificate categories">
  {% for category in certificate_categories %}
    <a href="#{{ category | slugify }}">{{ category }}</a>
  {% endfor %}
</nav>

{% for category in certificate_categories %}
  <section class="certificate-category" id="{{ category | slugify }}">
    <h2>{{ category }}</h2>
    <div class="certificate-grid">
      {% assign category_certificates = site.certificates | where: "category", category | sort: "date" | reverse %}
      {% for certificate in category_certificates %}
        <article class="certificate-card">
          {% if certificate.image %}<img src="{{ certificate.image | relative_url }}" alt="{{ certificate.title }} certificate">{% endif %}
          <div>
            <h3><a href="{{ certificate.url | relative_url }}">{{ certificate.title }}</a></h3>
            {% if certificate.provider %}<p class="certificate-provider">{{ certificate.provider }}</p>{% endif %}
            {% if certificate.date %}<p class="certificate-date">{{ certificate.date | date: "%B %Y" }}</p>{% endif %}
            <a class="read-more" href="{{ certificate.url | relative_url }}">View certificate</a>
          </div>
        </article>
      {% endfor %}
    </div>
  </section>
{% endfor %}
