const bodyParser = require('body-parser');
const express = require('express')
const nunjucks = require('nunjucks');

const app = express()

// import routes
const exercises = require('./routes/exercises');

nunjucks.configure('templates', {
    autoescape: true,
    express   : app
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/exercises', exercises);

app.use((req, res, next) => {
    res.status(404).json({error: 'Requested route is not defined'})
    //Or
    // res.status(404).render('404.html')
});

module.exports = app
