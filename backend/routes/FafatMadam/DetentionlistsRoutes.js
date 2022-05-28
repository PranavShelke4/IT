const express = require('express');
const router = express.Router();

const detentionlistsControllers = require('../../Controllers/FafatMadam/DetentionlistsControllers');

router.post('/add-detentionlist',detentionlistsControllers.postDetentionlist);
router.get('/get-detentionlists',detentionlistsControllers.getDetentionlists);
router.get('/get-detentionlist/:id',detentionlistsControllers.getDetentionlistById);
router.delete('/delete-detentionlist/:id',detentionlistsControllers.deleteDetentionlists);
router.patch('/update-detentionlist/:id',detentionlistsControllers.updateDetentionlist);

module.exports = router;