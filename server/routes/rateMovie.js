const express = require('express')
const router = express.Router()
const Rating = require('../database/models/rating')


router.get('/rated', (req,res) => {
    Rating.find()
    .then(rating => res.json(rating ));
})

router.post('/setRating', (req, res) => {
    const newRating = new Rating ({
        username: req.body.username,
        rating: req.body.rating,
        movieTitle: req.body.movieTitle
    })

    newRating.save().then(user => res.json(user));
});


module.exports = router;