---
title: 'Basics of Research for Healthcare Professionals'
layout: 'layouts/home.html'
mainImage: '/images/man-2562325_1280.jpg'
---
   <h3>Search</h3>
   <link href="/pagefind/pagefind-ui.css" rel="stylesheet">
      <script src="/pagefind/pagefind-ui.js"></script>
      <div id="search"></div>
      <script>
          window.addEventListener('DOMContentLoaded', (event) => {
              new PagefindUI({ element: "#search", showImages: false, showSubResults: true });
          });
      </script>


 {% include "partials/toc.html" %}