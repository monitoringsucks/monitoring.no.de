var app = require('express').createServer();
app.register('.html', require('jade'));
var md = require("node-markdown").Markdown;

var toolrepos = require('./tool-repos.json');
var loadtestingrepos = require('./loadtesting-repos.json');

app.get('/', function(req, res){
  res.render('index.html', { toolrepos: toolrepos.data, loadtestingrepos: loadtestingrepos.data, md: md })
});

app.listen(process.env.PORT || 8001);
