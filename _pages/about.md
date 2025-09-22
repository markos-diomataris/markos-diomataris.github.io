---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm passionate about developing **intelligent virtual humans** and advancing **motion synthesis** through the intersection of machine learning, computer vision, and robotics.

## Featured Research

<div style="text-align: center; margin-bottom: 2rem;">
  <a href="{{ '/publications/' | prepend: base_path }}" class="btn btn--large btn--primary">View All Publications</a>
</div>

<div class="featured-publications">
{% assign featured_pubs = site.publications | sort: 'date' | reverse | limit: 4 %}
{% for pub in featured_pubs %}
  <div class="featured-pub">
    <div class="featured-pub__media">
      <a href="{{ pub.url | prepend: base_path }}">
        {% if pub.video %}
          {% if pub.video contains '.gif' %}
            <img src="{{ pub.video | prepend: base_path }}" alt="{{ pub.title }} animation" class="featured-pub__video">
          {% else %}
            <video autoplay muted loop playsinline preload="auto" class="featured-pub__video">
              <source src="{{ pub.video | prepend: base_path }}" type="video/mp4">
            </video>
          {% endif %}
        {% elsif pub.image %}
          <img src="{{ pub.image | prepend: base_path }}" alt="{{ pub.title }}" class="featured-pub__video">
        {% endif %}
      </a>
    </div>
    <div class="featured-pub__content">
      <h3 class="featured-pub__title">
        {{ pub.title }}
      </h3>
      <p class="featured-pub__venue">{{ pub.venue }}</p>
      <p class="featured-pub__excerpt">{{ pub.excerpt | truncate: 120 }}</p>
      <div class="featured-pub__links">
        {% if pub.pdf_url %}
          <a href="{{ pub.pdf_url }}" class="btn btn--small btn--primary">PDF</a>
        {% endif %}
        {% if pub.project_url %}
          <a href="{{ pub.project_url }}" class="btn btn--small btn--info">Project</a>
        {% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>