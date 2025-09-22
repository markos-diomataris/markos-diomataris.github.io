---
title: "Grounding Consistency: Distilling Spatial Common Sense for Precise Visual Relationship Detection"
collection: publications
permalink: /publication/grounding-consistency
excerpt: 'We propose a semi-supervised scheme that forces predicted triplets to be grounded consistently back to the image, addressing context bias in Scene Graph Generators through spatial common sense distillation.'
venue: 'ICCV 2021'
authors: '<strong>Markos Diomataris</strong>, Nikolaos Gkanatsios, Vassilis Pitsikalis, Petros Maragos'
pdf_url: 'http://openaccess.thecvf.com/content/ICCV2021/papers/Diomataris_Grounding_Consistency_Distilling_Spatial_Common_Sense_for_Precise_Visual_Relationship_ICCV_2021_paper.pdf'
project_url: 'http://openaccess.thecvf.com/content/ICCV2021/html/Diomataris_Grounding_Consistency_Distilling_Spatial_Common_Sense_for_Precise_Visual_Relationship_ICCV_2021_paper.html'
code_coming_soon: true
video_coming_soon: true
image: '/files/GC.png'
---

Scene Graph Generators (SGGs) are models that, given an image, build a directed graph where each edge represents a predicted subject-predicate-object triplet. Most SGGs silently exploit datasets' bias on relationships' context to improve recall and neglect spatial and visual evidence.

We present an in-depth investigation of the context bias issue and showcase that all examined state-of-the-art SGGs share significant vulnerabilities. In response, we propose a semi-supervised scheme that forces predicted triplets to be grounded consistently back to the image, in a closed-loop manner.

Our Grounding Consistency Distillation (GCD) approach is model-agnostic and profits from superfluous unlabeled samples to retain valuable context information while averting memorization of annotations. We demonstrate substantial improvements in spatial reasoning ability, with up to 70% relative precision boost on the VG200 dataset.