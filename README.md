# grunt-getsave-async

> Save files to the file system the async way. Uses promises

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-getsave_async --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-getsave_async');
```

## The "getsave_async" task

### Overview
In your project's Gruntfile, add a section named `getsave_async` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  getsave_async: {
    options: {
      "https":true
    },
    your_target: [
      {
        "get":"URL of the file to GET"
        "loc":"Location of file to be saved"
      },
      {
        "get":"URL of the file to GET"
        "loc":"Location of file to be saved"
      }
    ],
  },
});
```

### Usage Examples

#### Default Options

All files can either be set to fetch through HTTPS ot HTTP using the "https" option.

```js
grunt.initConfig({
    getsave_async: {
      "target":[
        {
          "get":"https://placeholdit.imgix.net/~text?txtsize=33&txt=this1&w=352&h=150",
          "loc":"output/img1.png"
        },
        {
          "get":"https://placeholdit.imgix.net/~text?txtsize=33&txt=this2&w=352&h=150",
          "loc":"output/img2.png"
        },
        {
          "get":"https://placeholdit.imgix.net/~text?txtsize=33&txt=this3&w=352&h=150",
          "loc":"output/img3.png"
        },
        {
          "get":"https://placeholdit.imgix.net/~text?txtsize=33&txt=this4&w=352&h=150",
          "loc":"output/img4.png"
        }
      ],
      "options": {
        "https": true
      }
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
Comments and suggestions are always welcome.

## Release History
_(Nothing yet)_
