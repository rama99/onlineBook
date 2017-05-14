var express = require('express');
var router = express.Router();

router.get('/' , (req , res , next) => {
    res.render('index.html');
})

router.get('/test' , (req , res , next) => {
     res.send('route send test');
})

module.exports = router;