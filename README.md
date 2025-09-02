# Storygamesla.com
The website for Storygamesla.com

### Git 

```git clone git@github.com:ghellings/storygamesla.com.git```

## Development

### Simple Changes

The text for pages on the site can be found in src/pages. The framework the site uses can support a lot of different markup languages, but most of the pages will be formated in [Markdown](https://www.markdownlang.com/intro/what-is-markdown.html), which is very easy to learn. You can make changes and submit them as a git pull request if you know how to do that, or just send them to me directly.

### More Involved Development
This website uses [11ty](https://www.11ty.dev/) Simple Static Site Generator. You will need to install [Node.js](https://nodejs.org/en/download) version 18 or higher to use it. Once you've got a working Nodejs envirnomment you'll need to install 11ty.

Then while in the root directory of this repo execute

```npm install```

And then 

```npx @11ty/eleventy --serve```

This will launnch a website on [http://localhost:8080](http://localhost:8080). From here you can start making changes to files and see them immediately reflected. 