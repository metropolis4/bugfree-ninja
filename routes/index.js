var express = require('express');
var router = express.Router();
var authenticationController = require('../controllers/authentication');
var indexController = require('../controllers/index');

router.get('/', indexController.index);
router.get('/templates/:templateId', function(req, res){
    res.render('templates/' + req.params.templateId);
});
router.post('/auth/signup', authenticationController.processSignup);
router.get('/auth/logout', authenticationController.logout);
router.post('/auth/login', authenticationController.processLogin);
router.get('/newJob', indexController.newJob);
router.get('/api/jobs', indexController.getJobs);
router.post('/api/jobs', indexController.createNewJob);

module.exports = router;