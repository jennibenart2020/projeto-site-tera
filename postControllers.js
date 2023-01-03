let postData = require('../models/post');
let userData = require('../models/user');


module.exports.createPost = function(req, res) {
    let promise = postData.create(req.body);

    promise.then(
        function(post) {
            res.status(201).json(post);
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};


module.exports.getAllPosts = function(req, res) {
    let promise = postData.find().populate('uid').exec();

    promise.then(
        function(posts) {
            res.status(200).json(posts);
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};

module.exports.getPost = function(req, res) {
    let id = req.params.id;
    let promise = postData.findById(id).exec();

    promise.then(
        function(posts) {
            if (posts) {
                res.status(200).json(posts);
            } else {
                res.status(404).send("Post not found");
            }
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};

module.exports.updatePost = function(req, res) {
    let id = req.params.id;

    let post = new postData({
        text: req.body.text,
        likes: req.body.likes,
        uid: req.body.user,
        _id: req._id
    });

    let promise = postData.findByIdAndUpdate(id, req.body).exec();

    promise.then(
        function(post) {
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).send("Post not found");
            }
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};


module.exports.deletePost = function(req, res) {
    let id = req.params.id;
    let promise = postData.findByIdAndRemove(id).exec();

    promise.then(
        function(post) {
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).send("Post not found")
            }
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    );
};
