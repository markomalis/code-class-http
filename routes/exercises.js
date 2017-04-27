/*
For the documentation of Express visit:
    - https://expressjs.com/en/api.html
For concise information about status codes visit:
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/

const express = require('express');
const router = express.Router();

router.get('/1', (req, res, next) => {
    // Set the status to 200 OK and render the desired page
    res.status(200).render('exercise_1.html')
})

router.get('/2', (req, res, next) => {
    // Set the 'Location' header so the browser knows what the new location is
    res.set('Location', '/exercises/2.1')
    // Return a 302 response and send the response
    res.status(302).end()

    // Or do everything in one line
    // res.redirect(302, '/exercises/2.1')
})

router.get('/2.1', (req, res, next) => {
    res.status(200).render('exercise_2.1.html')
})

router.get('/3', (req, res, next) => {
    res.status(200).render('exercise_3.html')
})

router.get('/4', (req, res, next) => {
    res.status(200).render('exercise_4.html')
})

router.get('/5', (req, res, next) => {
    res.status(200).render('exercise_5.html')
})

router.post('/5', (req, res, next) => {
    const headers = req.headers;

    // Check if this request should be cached
    if (headers['cache-control'] === 'no-cache') {
        res.set('Cache-Control', 'max-age=0')
    }

    if(headers['accept'] === 'application/json') {
        res.status(200).json(req.body)
    }
    else if (headers['accept'] === 'text/html') {
        res.status(200).render('artist.html', {artist: req.body})
    }
    else {
        res.status(406).json({error: "Accept type not recognized"})
    }
})

module.exports = router
