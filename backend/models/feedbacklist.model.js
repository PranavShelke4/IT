const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbacklistSchema = new Schema({
    // username: {type: String, required: true},
    date: {type: String,required: true},
    description: {type: String, required: true},
    link: {type: String, required: true},
    
});

const Feedbacklist = mongoose.model('Feedbacklist', feedbacklistSchema);

module.exports = Feedbacklist;