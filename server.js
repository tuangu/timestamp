'use strict';

var express = require('express'),
    routeTime = require('./app/routes/time.js'),
    routeHeader = require('./app/routes/header.js');
    
var app = express();

routeTime(app);
routeHeader(app);

app.listen(process.env.PORT, function() {
    console.log('Server is running on port '+ process.env.PORT +'...');
});
