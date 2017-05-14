var express = require('express');



const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favIcon = require('serve-favicon');
const logger = require('morgan');
const responseTime = require('response-time');
const compression = require('compression');
const session = require('express-session');
const csurf = require('csurf');
const timeout = require('connect-timeout');
const helmet = require('helmet');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');

// core module path
const path = require('path');

const ejs = require('ejs');

var index = require('./routes/index');


module.exports = (app) => {

    app.use(compression({threshold: 1}));

    // methodOverride  middleware configuration
    app.use(methodOverride('X-HTTP-Method-override'));
    app.use(methodOverride('_method'));

    // helemet middleware , for adding security related headers to http response
    app.use(helmet());

   // app.use(favIcon(path.join(__dirname , '/client/favicon.png')));

    // cookie parser
    app.use(cookieParser());

    // express session middleware , this should be after cookie parser
    app.use(session({secret:'clickclick'}));

    app.use(session({ 
    secret: 'clickclick',
    cookie: {
        path:'/',
        httpOnly:true,
        maxAge:null
    }
    }));

    // csurf should be after express session middleware
    // app.use(csurf());

    // CORS middleware
    app.use(function(req, res, next) {
                        res.header("Access-Control-Allow-Origin", "*");
                        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                        next();
    });

    // set view engine
    app.set('view engine' , ejs);

    // set views path
    app.set('views' , './views');

    app.engine('html' , require('ejs').renderFile);

    app.use(express.static(path.join(__dirname, 'app'))); 
    
    app.use('/dist' ,express.static(path.join(__dirname, 'dist'))); 

    // static files path
    app.use(express.static(path.join(__dirname, 'node_modules'))); 
   

    // body parsing
    app.use(bodyParser.json());
    app.use(bodyParser(bodyParser.urlencoded({extended: false})));

    // middleware response time, sets  X-RESPONSE-TIME response header
    //app.use(responseTime({digits:4}));

    // Disable X-Powered-By , for security
    app.set('x-powered-by', false);

    app.use('/' , index);

  /* app.get('/' , (req , res, next) => {
       res.send('from the index');
   })*/

    // 404 route
  /*  app.use( (req , res , next) => {
        res.render('404.html');
    }) */

    // error handling
    app.use( (err , req , res , next) => {
        res.send(err);
    })


}