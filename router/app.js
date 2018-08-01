var wiki = require('./wiki.js');

var express = require('express');
var app = express();

app.use('/wiki', wiki);

app.listen(3000, function() {
    console.log('Listening on port 3000. Try http://localhost:3000/wiki/about')
});
