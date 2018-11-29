const express = require('express')
const router = express.Router()
const Rating = require('../database/models/rating')


router.get('/rated', (req,res) => {
    Rating.find(req.body.username)
    .then(rating => res.json(rating));

})

router.get('/recommend', (req,res) => {

    Rating.find(req.body.title, 'username title movieID rating', function (err, rating) {
        if (err) return handleError(err);
        // 'athletes' contains the list of athletes that match the criteria.
      }).then(rating => res.json(rating));
})


router.post('/setRating', (req, res) => {
    
    // const newRating = new Rating ({
    //     username: req.body.username,
    //     rating: req.body.rating,
    //     movieTitle: req.body.movieTitle,
    //     movieID: req.body.movieID
    // })

    Rating.updateOne(
        {
          username: req.body.username,
          title : req.body.title,
          movieID: req.body.movieID
        },
        {
          username: req.body.username,
          title: req.body.title,
          movieID: req.body.movieID,
          rating: req.body.rating
        },
        { upsert: true, new: true }
      ).then(user => res.json(user));

    // newRating.save().then(user => res.json(user));
});

module.exports = router;