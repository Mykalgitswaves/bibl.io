const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.render('home.njk')
});

app.listen(port, () => {
    console.log('Yoo')
});