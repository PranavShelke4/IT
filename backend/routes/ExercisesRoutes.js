const express = require('express');
const router = express.Router();

const exercisesControllers = require('../Controllers/ExercisesControllers');

router.post('/add-exercise',exercisesControllers.postExercise);
router.get('/get-exercises',exercisesControllers.getExercises);
<<<<<<< HEAD
router.get('/get-exercise/:id',exercisesControllers.getExerciseById);
=======
>>>>>>> 373f06356ce89ddbba42106d657e74d8e2f953f5
router.delete('/delete-exercise/:id',exercisesControllers.deleteExercises);
router.patch('/update-exercise/:id',exercisesControllers.updateExercise);

module.exports = router;