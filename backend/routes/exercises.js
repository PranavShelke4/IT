const router = require('express').Router();
let Exercise = require('../models/exercise.model');


// var RateLimit = require('express-rate-limit');
// var limiter = new RateLimit({
//   windowMs: 1*60*1000, // 1 minute
//   max: 5
// });

// // apply rate limiter to all requests
// app.use(limiter);

router.route('/').get((req,res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add-exercise').post((req,res) => {
    // const username = req.body.username;

    const date = Date.parse(req.body.date);
    const activity = req.body.activity;
    const subject = req.body.subject;
    const group = Number(req.body.group);
    

    const newExercise = new Exercise({ date, activity, subject, group});

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('exercise/:id').get((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('exercise/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercise => res.json('Exercise deleted'))
        .catch(err => res.status(404).json('Error: '+err));
});

router.route('exercise/:id').post((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
           
            exercise.date = Date.parse(req.body.date);
            exercise.activity = req.body.activity;
            exercise.subject = req.body.subject;
            exercise.group = Number(req.body.group);
            

            exercise.save()
                .then(() => res.json('Exercise updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;