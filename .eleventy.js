const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/style.css": "style.css",
  });
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.setLibrary("md", markdownIt({
    breaks: true
  }));
  return {
    dir: {
      input: "src",
      output: "build"
    }
  }
};
