var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
    date    : Date,
    company : String,
    title   : String,
    contact : String,
    email   : String,
    response: Boolean,
    url     : String,
    phone   : String
});

module.exports = mongoose.model('jobs', jobSchema);