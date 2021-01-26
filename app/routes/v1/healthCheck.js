var express = require('express');
router = express.Router();

router.get('/', function(req, res){
    res.send('Products API is working!');
  });

module.exports = router;