const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const achievementSchema = new Schema({
    // username: {type: String, required: true},
    studentName: {type: String, required: true},
    dept: {type: String, required: true},
    institute: {type: String, required: true},
    event: {type: String, required: true},
    date: {type: Date,required: true}
    
}, {
    timestamps: true 
});

const Achievement = mongoose.model('Achievement', achievementSchema);
module.exports = Achievement;