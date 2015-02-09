var express = require('express');
var to_json = require('xmljson').to_json;
var path = require('path');
var Keen = require('keen-js'); 

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));


// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


//routes
app.get("/", function(req, res) {
  res.render("home.jade");
});

//**************configure keen.io = replace with your data
var client = new Keen({
    projectId: "<projectId>",
    writeKey: "<API writeKey>"
});

app.post("/", function(req, res, next) {
  var xml = req.body;
  to_json(xml, function (error, data) {
    // Module returns a JS object
    console.log(data);
    // confirm it's working in local host, displays as -> { prop1: 'val1', prop2: 'val2', prop3: 'val3' }

    // Format as a JSON string and sends it at as response, so you can test in a REST client, you might want to change the response here
    res.send(JSON.stringify(data));
    // -> {"prop1":"val1","prop2":"val2","prop3":"val3"}

    //send to keen
    client.addEvent(JSON.stringify(data), function(err, res) {
    if (err) {
        console.log("Oh no, an error!");
    } else {
        console.log("Hooray, it worked!");
    }
	});
    
	});
});