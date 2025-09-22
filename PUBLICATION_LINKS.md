# Publication Links Configuration

This document explains how to configure the four main types of links for publications: PDF, Project Page, Code, and Video.

## Available Link Types

### 1. PDF Link
```yaml
# Active PDF link
pdf_url: 'https://example.com/paper.pdf'

# Coming soon PDF (shows disabled button)
pdf_coming_soon: true
```

### 2. Project Page Link
```yaml
# Active project page link
project_url: 'https://your-project-website.com'

# Coming soon project page (shows disabled button)
project_coming_soon: true
```

### 3. Code Link
```yaml
# Active code link (usually GitHub)
code_url: 'https://github.com/username/repo'

# Coming soon code (shows disabled button)
code_coming_soon: true
```

### 4. Video Link
```yaml
# Active video link (external video)
video_url: 'https://youtube.com/watch?v=...'

# Coming soon video (shows disabled button)
video_coming_soon: true
```

## Example Publication Configuration

```yaml
---
title: "My Amazing Paper"
collection: publications
permalink: /publication/my-paper
excerpt: 'Brief description of the paper'
venue: 'CVPR 2024'

# Active links
project_url: 'https://my-project.com'
video_url: 'https://youtube.com/watch?v=abc123'

# Coming soon links (will show as disabled buttons)
pdf_coming_soon: true
code_coming_soon: true

# Embedded video for the publication card
video: '/files/my-video.mp4'
---
```

## Link Behavior

- **Active links**: Clickable buttons that navigate to the specified URL
- **Coming soon links**: Disabled buttons with "(Coming Soon)" text that cannot be clicked
- **Mixed state**: You can have some links active and others as "coming soon"

## Button Colors

- **PDF**: Blue (Primary)
- **Project Page**: Light Blue (Info)
- **Code**: Dark Gray (Inverse)
- **Video**: Red (Danger)

## Legacy Support

The old `paperurl` field is still supported for backward compatibility. If you use both `paperurl` and the new fields, `paperurl` will be shown as a generic "Link" button only if it's different from the new URL fields.