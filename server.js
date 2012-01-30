var util = require('util'),
    exec = require('child_process').exec,
    child;

var app = require('express').createServer();
app.register('.html', require('jade'));

var repos = [];
repos = exec('find /root/monitoringsucks/ -iname "readme*"', function(err, stdout, stderr) {
  var file_list = [];
  file_list = stdout.split("\n");
  return file_list;
  /* now you've got a list with full path file names */
});

app.get('/', function(req, res){
  var file_list = [];
  file_list = repos;
  res.send('pie');
});

app.listen(process.env.PORT || 8001);
