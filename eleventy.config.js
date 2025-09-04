import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";


let markdownItOptions = {
    html: true // you can include HTML tags
}

let markdownItAnchorOptions = {
    level: 2 // minimum level header -- anchors will only be applied to h2 level headers and below but not h1
}

export default function (eleventyConfig) {
  
  eleventyConfig.setDataDirectory("data");
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setIncludesDirectory("layouts");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("src/assets/styles/bundle.css");

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions))
};
