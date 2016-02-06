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
            res.send({
                "ipaddress": req.ip,
                "language": req.get('Accept-Language'),
                "software": req.get('User-Agent')
            });    
        });
}