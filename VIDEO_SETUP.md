# Video Setup Instructions

## Adding your MP4 video:

1. Place your MP4 file in the `/files/` directory
2. Update the `video` field in your publication file to match your video filename

For example, if your video is named `wandr-demo.mp4`, update the publication like this:

```yaml
---
title: "WANDR"
collection: publications
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'Generation of Human Avatar motion that reaches goals in space'
date: 2009-10-01
venue: 'CVPR 2024'
paperurl: 'https://wandr.is.tue.mpg.de/'
video: '/files/wandr-demo.mp4'
---
```

## Video features:
- Autoplays when page loads
- Loops continuously 
- Muted by default (required for autoplay)
- Responsive design
- Styled with rounded corners and shadow

## Supported formats:
- MP4 (recommended)
- WebM
- OGV

The video will appear right below the publication title on the publications page.