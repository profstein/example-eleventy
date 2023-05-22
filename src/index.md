---
title: Home
layout: base
tags: navItem
pageClass: home
---
## {{title}}

My Home Page!
This is the home page. Replace this with your text.

<ul>
 {% for project in collections.project %}
  <li>
    <a href="{{ project.url }}"> {{ project.data.title }}</a>
  </li>
  {% endfor %}
</ul>