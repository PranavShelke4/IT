const express = require('express');
const router = express.Router();

const achievementsControllers = require('../../Controllers/GhodeMadam/AchievementsControllers');

router.post('/add-achievement',achievementsControllers.postAchievement);
router.get('/get-achievements',achievementsControllers.getAchievements);
router.get('/get-achievement/:id',achievementsControllers.getAchievementById);
router.delete('/delete-achievement/:id',achievementsControllers.deleteAchievements);
router.patch('/update-achievement/:id',achievementsControllers.updateAchievement);

module.exports = router;