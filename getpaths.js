// this is gross.  makemesomejson.rb is also gross but works

var util = require('util'),
    exec = require('child_process').exec,
    child;

var repos = [];
repos = exec('find /root/monitoringsucks/ -iname "readme*"', function(err, stdout, stderr) {
  var file_list = [];
  file_list = stdout.split("\n");
  return file_list;
  /* now you've got a list with full path file names */
});

