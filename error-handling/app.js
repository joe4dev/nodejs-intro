var express = require('express');
var app = express();

app.get('/', function(req, res) {
    throw 'App crashed!';
    res.send('This is never sent!');
});

app.use(function(err, req, res, next) {
    console.error('ERROR:' + err);
    res.status(500).send('Something broke!');
});

app.listen(3000);
