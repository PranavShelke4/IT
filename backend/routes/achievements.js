const router = require('express').Router();
let Achievement = require('../models/achievement.model');

router.route('/').get((req,res) => {
    Achievement.find()
        .then(achievements => res.json(achievements))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add-achievement').post((req,res) => {
    // const username = req.body.username;

    const studentName = req.body.studentName;
    const dept = req.body.dept;
    const institute = req.body.institute;
    const event = req.body.event;
    const date = Date.parse(req.body.date);
   
    const newAchievement = new Achievement({ studentName, dept, institute, event, date });

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
           
            achievement.studentName = req.body.studentName;
            achievement.dept = req.body.dept;
            achievement.institute = req.body.institute;
            achievement.event = req.body.event;
            achievement.date = Date.parse(req.body.date);

            achievement.save()
                .then(() => res.json('Achievement updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;