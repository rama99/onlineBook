var express = require('express');
var router = express.Router();
var co = require('co-express');

const indexCtrl = require('../controller/index');

router.get('/' , co (function * (req , res , next)  {
    res.render('index.html');
}))

router.get('/chapters' , co (function * (req , res , next)  {
    let data = yield indexCtrl.getChapters();
     res.send(data);
}))

module.exports = router;