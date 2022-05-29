const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbacklistSchema = new Schema({
    // username: {type: String, required: true},
    year: {type: String, required: true},
    faculty: {type: String, required: true},
    link: {type: String, required: true},
    
});

const Feedbacklist = mongoose.model('FYFeedbacklist', feedbacklistSchema);

module.exports = Feedbacklist;