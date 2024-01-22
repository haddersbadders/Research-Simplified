--- 
title: 'Search'
layout: 'layouts/home.html'
mainImage: '/images/man-2562325_1280.jpg'
---

   <!-- <h2>Search</h2> -->
      <link href="/pagefind/pagefind-ui.css" rel="stylesheet">
      <script src="/pagefind/pagefind-ui.js"></script>
      <div id="search"></div>
      <script>
          window.addEventListener('DOMContentLoaded', (event) => {
              new PagefindUI({ element: "#search", showImages: false, showSubResults: true });
          });
      </script>