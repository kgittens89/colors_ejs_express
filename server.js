require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 4000;

const colors = require('./colors.js')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.redirect('/colors')
});

app.get('/colors', (req, res) => {
    const context = { colors: colors }
    console.log(context)
    res.render('index.ejs', context)
})

app.get('/colors/:id', (req, res) => {
    const context = { color: colors[req.params.id], id: req.params.id }
    res.render('show.ejs', context)
})


app.listen(PORT, function () {
	console.log(`Server is running on ${PORT}`);
});
