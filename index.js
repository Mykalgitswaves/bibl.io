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

app.use(express.static(path.join(__dirname, '/views/js')));

app.get('/home', (req, res) => {
    res.render('home.njk');
});

const book_data = {
        "book": 'The catcher in the Rye',
        "description": 'Another banned book',
        "book-cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446876799l/6759.jpg" 
    }

app.post('/hero-clicked', (req, res) => {
    // Is there a way to get our api
    // recommending books to people 
    // from a couple of recs?

    const data = `
        <div class="book-card">
            <img 
                src="${book_data['book-cover']}"
                alt="${book_data['book']}"
            >
            <h3>${book_data['book']}</h3>
            <p>${book_data['description']}</p>
        </div>
    `;

    res.send(data);
});

app.listen(port, () => {
    console.log('Yoo')
});