/*
 * grunt-getsave-async
 * https://github.com/kchetan92/grunt-getsave-asyc
 *
 * Copyright (c) 2017 K Chetan
 * Licensed under the MIT license.
 */

'use strict';

var http = require('http'),
    https = require('https'),
    fs = require('fs');

module.exports = function(grunt) {

  grunt.registerMultiTask('getsave_async', 'Save files to the file system the async way. Uses promises', function() {

    console.log(this.options());

    var getFunc = http.get;

    if(this.options()) {
        getFunc = https.get;
    }

    var done = this.async();
    var getData = this.data;
    var promises = [];
    getData.map(function(file){
      promises.push(
          new Promise(function(resolve, reject){
            grunt.log.writeln('Fetch :'+file.get);
            getFunc(file.get, function(res){
              res.pipe(fs.createWriteStream(file.loc));
              res.on('end', function(){
                grunt.log.writeln('Received :'+file.get);
                resolve('success');
              });
            }).on('error', function(e){
              console.log(e);
              reject(e);
            })
          })
      );
    });

    Promise.all(promises)
        .then(function(){
          done()
        }).catch(function(err){
          console.log(err);
          done(false);
        });

  });

};
