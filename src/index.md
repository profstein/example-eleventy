---
title: Home
layout: base
tags: navItem
pageClass: home
---
# {{title}}

My Home Page!
This is the home page. Replace this with your text.

## Projects V1
<ul>
 {% for project in collections.project %}
  <li>
    <a href="{{ project.url }}"> {{ project.data.title }}</a>
  </li>
  {% endfor %}
</ul>

## Design Projects
<ul>
 {% for project in collections.design %}
  <li>
    <a href="{{ project.url }}"> {{ project.data.title }}</a>
  </li>
  {% endfor %}
</ul>

## Projects V2
<ul>
 {% for item in collections.portfolio %}
  <li>
    <a href="{{ item.url }}"> {{ item.data.title }}</a>
  </li>
  {% endfor %}
</ul>