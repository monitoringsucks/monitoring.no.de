var app = require('express').createServer();
app.register('.html', require('jade'));
var md = require("node-markdown").Markdown;

var repos = require('./tool-repos.json');

app.get('/', function(req, res){
  res.render('index.html', { repos: repos.data, md: md })
});

app.listen(process.env.PORT || 8001);
