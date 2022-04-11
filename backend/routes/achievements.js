const router = require('express').Router();
let Achievement = require('../models/achievement.model');

router.route('/').get((req,res) => {
    Achievement.find()
        .then(achievements => res.json(achievements))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add-achievement').post((req,res) => {
    // const username = req.body.username;

    const date = Date.parse(req.body.date);
    const activity = req.body.activity;
    const subject = req.body.subject;
    const group = Number(req.body.group);
    

    const newAchievement = new Achievement({ date, activity, subject, group});

    newAchievement.save()
        .then(() => res.json('Achievement added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('achievement/:id').get((req,res) => {
    Achievement.findById(req.params.id)
        .then(achievement => res.json(achievement))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('achievement/:id').delete((req,res) => {
    Achievement.findByIdAndDelete(req.params.id)
        .then(achievement => res.json('Achievement deleted'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res) => {
    Achievement.findById(req.params.id)
        .then(achievement => {
           
            achievement.date = Date.parse(req.body.date);
            achievement.activity = req.body.activity;
            achievement.subject = req.body.subject;
            achievement.group = Number(req.body.group);
            

            achievement.save()
                .then(() => res.json('Achievement updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;