---
layout: default
title: Blog
description: Notes and research from Absalem Aroon on cybersecurity, blockchain, and distributed systems.
permalink: /blog/
author_profile: true
---

<h1>Blog - Thinking Distributed</h1>

<h2>Latest Posts</h2>
<ul>
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

<h2>Tags</h2>
<ul>
{% for tag in site.tags %}
  <li>
  {{ tag[0] }}
    {% for post in tag[1] %}
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>&nbsp;
    {% endfor %}
  </li>
{% endfor %}
</ul>

