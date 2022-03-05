const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pedologySchema = new Schema({
    date: {type: Date,required: true},
    activityName: {type: String, required: true},
    subject: {type: String, required: true},
    groupNo: {type: Number, required: true},
}, {
    timestamps: true
});

const Pedology = mongoose.model('Pedology', pedologySchema);

module.exports = Pedology;