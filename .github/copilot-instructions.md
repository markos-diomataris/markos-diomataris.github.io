# GitHub Copilot Instructions

This is an academic personal website built with Jekyll using the Academic Pages template, deployed on GitHub Pages.

## Architecture Overview

- **Jekyll Site**: Static site generator with Liquid templating
- **Theme**: Based on Minimal Mistakes, customized for academic use
- **Deployment**: GitHub Pages with automatic builds
- **Content Collections**: Publications, talks, teaching, portfolio, posts organized as Jekyll collections

## Content Organization

### Collections Structure
All content uses Jekyll collections with specific frontmatter patterns:

- `_publications/`: Academic papers with `paperurl`, `citation`, `venue`, `date`
- `_talks/`: Conference presentations with `type`, `venue`, `location`, `date`
- `_teaching/`: Teaching experiences with `type`, `venue`, `location`
- `_posts/`: Blog posts with `tags`, `permalink`
- `_pages/`: Static pages like CV, about, using `permalink` and `redirect_from`

### Frontmatter Conventions
```yaml
---
title: "Paper/Talk Title"
collection: publications|talks|teaching
permalink: /collection/filename-without-extension
date: YYYY-MM-DD
venue: "Journal/Conference Name"
location: "City, Country"  # for talks/teaching
type: "Journal paper|Conference talk|Course"  # for talks/teaching
paperurl: "http://..."  # for publications
citation: "Full citation"  # for publications
excerpt: "Brief description"
---
```

## Development Workflow

### Local Development
```bash
bundle install          # Install Ruby dependencies
bundle exec jekyll serve -l -H localhost  # Serve locally with live reload
```

### Asset Management
- SCSS files in `_sass/` compiled automatically
- JavaScript concatenated via npm: `npm run build:js`
- Images stored in `images/` directory
- PDFs and files in `files/` directory

## Layout Hierarchy

- `default.html`: Base layout with `<head>`, navigation, footer
- `single.html`: Most content pages (publications, teaching, posts)
- `talk.html`: Specialized layout for talks with venue/location display
- `archive.html`: Collection listing pages

### Key Includes
- `author-profile.html`: Sidebar with bio, social links (configured in `_config.yml`)
- `archive-single.html`: Individual item display in collection lists
- `head.html`: SEO metadata, analytics integration
- `masthead.html`: Site navigation header

## Configuration Patterns

### Author Profile (`_config.yml`)
Social links and academic profiles controlled by `author:` section. Setting a field to blank hides the corresponding icon/link.

### Collections Setup
```yaml
collections:
  publications:
    output: true
    permalink: /:collection/:path/
```

### Default Layouts Assignment
Uses Jekyll scope-based defaults to automatically assign layouts:
```yaml
defaults:
  - scope: { type: publications }
    values: { layout: single, author_profile: true }
```

## Content Creation Patterns

### Adding Publications
1. Create `YYYY-MM-DD-title.md` in `_publications/`
2. Use required frontmatter: `title`, `collection`, `permalink`, `venue`, `date`
3. Optional: `paperurl`, `citation`, `excerpt` for rich display

### Adding Talks/Teaching
Similar pattern but include `type`, `venue`, `location` for proper metadata display.

### Static Pages
- Use `_pages/` directory
- Set `permalink` for clean URLs
- Use `redirect_from` for URL migration

## Theme Customization

- SCSS variables in `_sass/_variables.scss`
- Override layouts by creating files in `_layouts/`
- Extend includes by adding to `_includes/`
- Site-wide settings in `_config.yml` under various sections

## Deployment Notes

- Uses `github-pages` gem for GitHub Pages compatibility
- Automatic deployment on push to `master` branch
- Jekyll plugins limited to GitHub Pages whitelist
- Assets minified via npm scripts for production