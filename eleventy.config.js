import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItAttrs from 'markdown-it-attrs';

let markdownItOptions = {
  html: true // you can include HTML tags
}

let markdownItAnchorOptions = {
  level: 2 // minimum level header -- anchors will only be applied to h2 level headers and below but not h1
}

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./src/js/');
    eleventyConfig.addPassthroughCopy('./src/css/');
    
    // Copy Bulma from node_modules to dist/css/bulma.css
    eleventyConfig.addPassthroughCopy({
      'node_modules/bulma/css/bulma.min.css': 'css/bulma.min.css'
    });

    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions).use(markdownItAttrs));

    // Returns work items, sorted by display order
    eleventyConfig.addCollection('chapters', collection => {
      return collection
        .getFilteredByGlob('./src/chapters/*.md')
        .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
