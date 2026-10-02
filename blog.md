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
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
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
      <a href="{{ post.url }}">{{ post.title }}</a>&nbsp;
    {% endfor %}
  </li>
{% endfor %}
</ul>

