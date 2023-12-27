const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.static(path.join(__dirname, '/views/styles')));

app.get('/', (req, res) => {
    res.render('home.njk')
});

app.listen(port, () => {
    console.log('Yoo')
});