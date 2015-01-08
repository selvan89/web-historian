var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt'),
  'home' : path.join(__dirname, '../web/public/index.html'),
  'loading': path.join(__dirname, '../web/public/loading.html')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
};

exports.isUrlInList = function(url, callback){
  fs.readFile(exports.paths.list, 'utf8', function(err, data){
    var files = data.split('\n');
    url = url.slice(1);
    console.log(url);
    // for(var i = 0; i < files.length - 1; i++){
    //   if(url === files[i]){
    //     return callback(null, error);
    //   }
    //   else{
    //     return callback('error', null);
    //   }
    // }
    files.pop();
    console.log('files: ', files);
    if(files.indexOf(url) < 0){
      callback('error', null);
    }
    else{
      console.log('url: ', url)
      callback(null, url);
    }
  //open sites.txt file
  //parse data into list of files
  //check url against this list
  });



  // fs.openFile(filePath, callback(err, data){
  //   data.parse('\n') -> array
  //   check indexof array (url)
  //     if < 0
  //       callback(err, null)
  //     else
  //       callback(null, url);
  // })
};

exports.addUrlToList = function(url, callback){
  // open sites.txt
  // write url to sites.txt
  // close sites.txt
  console.log('url: ', url)
  fs.writeFile(exports.paths.list, url, function(){
    console.log('url: ', url);
    callback();
  });

};

exports.isURLArchived = function(url, callback){
  fs.readdir(exports.paths.archivedSites, function(err, files){
    url = url.slice(1);
    if(files.indexOf(url) < 0){
      return callback('error', null);
    }
    else{
      return callback(null, url);
    }
    // for(var i = 0; i < files.length; i++){
    //   if(url === files[i]){
    //     return callback(null, url)
    //   }
    //   else
    //     return callback(error, null)
    // }
  })
};

exports.downloadUrls = function(){
};
