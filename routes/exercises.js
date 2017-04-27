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
    res.status(200).render('exercise_1.html', {})
})

module.exports = router
