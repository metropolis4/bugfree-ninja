var Job = require('../models/job');

module.exports = {
    index: function(req, res){
        res.render('index');
    },
    newJob: function(req, res){
        res.render('newJob');
    },
    getJobs: function(req, res){
        Job.find({}, function(err, results){
            if(err) throw err;
            res.send(results);
        });
    },
    createNewJob: function(req, res){
        console.log("FROM SERVER:: ", req.body);
        var newJob = new Job(req.body);
        newJob.save(function(err, results){
            if(err) throw err;
            res.send(results);
        });
    }
};