import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { RenderPlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import eleventyPluginRobotsTxt from "eleventy-plugin-robotstxt";
import eleventyPluginSitemap from "@quasibit/eleventy-plugin-sitemap";


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
  eleventyConfig.setIncludesDirectory("includes");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyPluginRobotsTxt, {
    rules: new Map([ ["*",[{ allow: "/"}] ]]),
    sitemap: "https://www.storygamesla.com/sitemap.xml"
  });
  eleventyConfig.addPlugin(eleventyPluginSitemap, {
	sitemap: {
	  hostname: "https://www.storygamesla.com",
	},
  });
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["avif", "webp", "jpeg"],
		// output image widths
		widths: ["auto"],
		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {}
		},
	});
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPassthroughCopy("src/assets/styles/bundle.css");
  eleventyConfig.addPassthroughCopy("src/assets/ical/download.ics");

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions))
};
