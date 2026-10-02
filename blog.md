---
layout: default
title: Blog
author: Absalem Aroon
description: Notes and research from Absalem Aroon on cybersecurity, blockchain, and distributed systems.
permalink: /blog/
---

<h1>Blog</h1>
<p class="page-intro">Notes and research on cybersecurity, blockchain, and distributed systems.</p>

{% assign blog_entries = site.blog | sort: "date" | reverse %}
{% if blog_entries.size > 0 %}
  <div class="blog-list">
    {% for entry in blog_entries %}
      <article class="blog-card">
        <p class="blog-date">{{ entry.date | date: "%B %-d, %Y" }}</p>
        <h2><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a></h2>
        {% if entry.excerpt %}
          <div class="blog-excerpt">{{ entry.excerpt }}</div>
        {% endif %}
        {% if entry.tags %}
          <p class="blog-tags">{% for tag in entry.tags %}<span>{{ tag }}</span>{% endfor %}</p>
        {% endif %}
        <a class="read-more" href="{{ entry.url | relative_url }}">Read article</a>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>No blog articles have been published yet.</p>
{% endif %}
