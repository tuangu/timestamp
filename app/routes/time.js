'use strict'
var parseTime = require('../controllers/parse.js');

module.exports = function (app) {
    app.route('/:time')
        .get(function (req, res) {
            var result = parseTime(req.params.time);
            res.send(result)
        });
    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    app.route('/api/whoami')
        .get(function (req, res) {
            console.log(req.ips);
            console.log(typeof req.get('Accept-Language'));
            console.log(typeof req.get('User-Agent'));
            res.send({
                "ipaddress": req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] || req.client.remoteAddress,
                "language": req.acceptsLanguages()[0],
                "software": req.get('User-Agent')
            });    
        });
}