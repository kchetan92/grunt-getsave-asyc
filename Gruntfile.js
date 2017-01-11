/*
 * grunt-getsave-async
 * https://github.com/kchetan92/grunt-getsave-asyc
 *
 * Copyright (c) 2017 K Chetan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      output: ['output']
    },

    mkdirs: {
      output: 'output'
    },

    // Configuration to be run (and then tested).
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
      "options":{
        "https":true
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'getsave_async', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'mkdirs', 'getsave_async']);

};
