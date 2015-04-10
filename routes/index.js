var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/templates/:templateId', function(req, res){
    res.render('templates/' + req.params.templateId);
});

module.exports = router;