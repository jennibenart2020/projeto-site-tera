let controller = require("../controllers/postController.js");

module.exports = function(app){

    app.post("/api/posts", controller.createPost);
    app.get("/api/posts", controller.getAllPosts);
    app.get("/api/posts/:id", controller.getPost);
    app.put("/api/posts/:id", controller.updatePost);
    app.delete("/api/posts/:id", controller.deletePost);


}