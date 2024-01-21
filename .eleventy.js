module.exports = config => {
    config.addPassthroughCopy('./src/images/');
    config.addPassthroughCopy('./src/js/');
    config.addPassthroughCopy('./src/css/');
    
    
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