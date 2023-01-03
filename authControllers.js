let userData = require('../models/user');
let bcrypt = require('bcrypt');

module.exports.login = function(req, res) {
    function login(user) {
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            fail();
        } else {
            res.status(200).send("login true!");
        }
    }

    function fail() {
        res.status(401).send('Invalid login!');
    }

    userData.findOne({ email: req.body.email }).exec().then(login, fail);
}