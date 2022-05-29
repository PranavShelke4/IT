const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentlistSchema = new Schema({
    // username: {type: String, required: true},
    date: {type: String,required: true},
    description: {type: String, required: true},
    link: {type: String, required: true},
    
});

const Studentlist = mongoose.model('FYStudentlist', studentlistSchema);

module.exports = Studentlist;