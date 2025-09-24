---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

What does it take to create avatars that move and behave like real humans? My research focuses on building models and methods that try to answer this question. I want to create human avatars that not only move like us but also sense the world and learn from their experience like us. I combine data driven methods along with reinforcement learning paradigms in an effort to create agents that are able to learn human behaviors that go beyond what can be learned from the available datasets.

## Featured Research

<div style="text-align: center; margin-bottom: 2rem;">
  <a href="{{ '/publications/' | prepend: base_path }}" class="btn btn--large btn--primary">View All Publications</a>
</div>

<div class="featured-publications">
{% assign featured_pubs = site.publications | sort: 'date' | reverse | limit: 4 %}
{% for pub in featured_pubs %}
  <div class="featured-pub">
    <div class="featured-pub__media">
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