let userData = require('../models/user');
let bcrypt = require('bcrypt');

module.exports.createUser = function(req, res) {
    let promise = userData.create(req.body);

    let user = new userData({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,  111)
    })

    promise.then(
        function(user) {
            res.status(201).json(user);
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};


module.exports.getAllUsers = function(req, res) {
    let promise = userData.find().exec();

    promise.then(
        function(users) {
            res.status(200).json(users);
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};

module.exports.getUser = function(req, res) {
    let id = req.params.id;
    let promise = userData.findById(id).exec();

    promise.then(
        function(user) {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send("User not found");
            }
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};

module.exports.updateUser = function(req, res) {
    let id = req.params.id;

    let user = new userData({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        _id: req._id
    });

    let promise = userData.findByIdAndUpdate(id, req.body).exec();

    promise.then(
        function(user) {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send("User not found");
            }
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};


module.exports.deleteUser = function(req, res) {
    let id = req.params.id;
    let promise = userData.findByIdAndRemove(id).exec();

    promise.then(
        function(user) {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send("User not found")
            }
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};
