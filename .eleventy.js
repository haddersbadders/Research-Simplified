const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
let markdownItOptions = {
  html: true // you can include HTML tags
}

let markdownItAnchorOptions = {
  level: 2 // minimum level header -- anchors will only be applied to h2 level headers and below but not h1
}


module.exports = config => {
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/js/');
    config.addPassthroughCopy('./src/css/');
    
    config.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions))
    
 

    // Returns work items, sorted by display order
config.addCollection('chapters', collection => {
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