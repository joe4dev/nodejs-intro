var express = require('express');
var app = express();

app.use('/media', express.static('public'));

app.listen(3000);

// Open in your browser:
// http://localhost:3000/media/dog.jpg
// http://localhost:3000/media/css/style.css
