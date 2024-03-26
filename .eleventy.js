const yaml = require('js-yaml');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    
    eleventyConfig.addLayoutAlias('base', 'base.njk');

    // Add a collection for portfolio items
  eleventyConfig.addCollection("portfolio", function(collectionApi) {
    // Return the items sorted by date or any other property
    return collectionApi.getFilteredByGlob("src/portfolio/**/*.md").sort(function(a, b) {
      return a.date - b.date;
    });
  });

    // Return your Object options:
    return {
      markdownTemplateEngine: 'njk',
      dir: {
        input: "src",
        output: "public",
        includes: "_includes"
      }
    }
};
