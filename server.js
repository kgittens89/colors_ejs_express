require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const methodOverride = require('method-override');

const colors = require('./colors.js');
const res = require('express/lib/response');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.get('/', function (req, res) {
    res.redirect('/colors')
});

app.get('/colors', (req, res) => {
    const context = { colors: colors }
    res.render('index.ejs', context)
})

app.get('/colors/new', (req, res) => {
    res.render('new.ejs')
})

app.post('/colors', (req, res) => {
    colors.push(req.body)
    res.redirect('/')
})

app.get('/colors/:id', (req, res) => {
    const context = { color: colors[req.params.id], id: req.params.id }
    res.render('show.ejs', context)
})

app.delete('/colors/:id', (req, res) => {
    colors.splice(req.params.id, 1)
    res.redirect('/colors')
})

app.get('/colors/:id/edit', (req, res) => {
    const context = { color: colors[req.params.id], id: req.params.id }
    
    res.render('edit.ejs', context)
})

app.put('/colors/:id', (req, res) => {
    colors[req.params.id] = req.body
    res.redirect(`/colors/${req.params.id}`)
})


app.listen(PORT, function () {
	console.log(`Server is running on ${PORT}`);
});
