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

module.exports = app
