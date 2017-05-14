var express = require('express');
var app = express();

require('./express')(app);


app.listen(9000 , () => {
    console.log('Server running on port 9000');
})
