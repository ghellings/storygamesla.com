import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.setDataDirectory("data");
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setIncludesDirectory("layouts");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("src/assets/styles/bundle.css");
};
