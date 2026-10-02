---
layout: default
title: Blog
author: Absalem Aroon
description: Notes and research from Absalem Aroon on cybersecurity, blockchain, and distributed systems.
permalink: /blog/
---

<h1>Blog</h1>

{% assign blog_entries = site.blog | sort: "date" | reverse %}

<h2>Latest Posts</h2>
{% if blog_entries.size > 0 %}
<ul class="blog-list">
  {% for entry in blog_entries %}
    <li class="blog-card">
      <h3><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a></h3>
      {% if entry.excerpt %}
        <div class="blog-excerpt">{{ entry.excerpt }}</div>
      {% elsif entry.description %}
        <p class="blog-excerpt">{{ entry.description }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No blog posts have been published yet.</p>
{% endif %}

{% assign all_tags = "" %}
{% for entry in blog_entries %}
  {% for tag in entry.tags %}
    {% assign all_tags = all_tags | append: tag | append: "|" %}
  {% endfor %}
{% endfor %}
{% assign tag_list = all_tags | split: "|" | uniq | sort %}

{% if tag_list.size > 0 %}
<h2>Tags</h2>
<ul class="tag-index">
  {% for tag in tag_list %}
    <li id="tag-{{ tag | slugify }}">
      <strong>{{ tag }}</strong>
      {% for entry in blog_entries %}
        {% if entry.tags contains tag %}
          <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>&nbsp;
        {% endif %}
      {% endfor %}
    </li>
  {% endfor %}
</ul>
{% endif %}
