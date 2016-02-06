'use strict';

module.exports = function (app) {
    app.route('/whoami')
        .get(function (req, res) {
            res.send({
                "ipaddress": req.ip,
                "language": req.get('Accept-Language'),
                "software": req.get('User-Agent')
            });    
        });
}