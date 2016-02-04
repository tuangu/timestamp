'use strict';

var express = require('express'),
    routes = require('./app/routes/time.js');
    
var app = express();

routes(app)

app.listen(process.env.PORT, function() {
    console.log('Server is running on port '+ process.env.PORT +'...');
});
