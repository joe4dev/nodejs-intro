var path = require('path')
var express = require('express');
var app = express();

// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));

// Set view engine to use, in this case 'pug'
// https://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
});

app.listen(3000);
