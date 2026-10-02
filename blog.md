---
layout: default
author: Absalem Aroon
title: Blog - Research Distributed System
description: This blog aims at being thought provoking and covers subjects related to research and distributed system of blockchain technology.
permalink: /blog/
author_profile: true
---

<h1>Blog - Research Distributed System</h1>

<h2>Latest Blog</h2>
<ul>
  {% for blog in site.blog %}
    <li>
      <h3><a href="{{ blog.url }}">{{ blog.title }}</a></h3>
      {{ blog.excerpt }}
    </li>
  {% endfor %}
</ul>

<h2>Tags</h2>
<ul>
{% for tag in site.tags %}
  <li>
  {{ tag[0] }}
    {% for blog in tag[1] %}
      <a href="{{ blog.url }}">{{ blog.title }}</a>&nbsp;
    {% endfor %}
  </li>
{% endfor %}
</ul>