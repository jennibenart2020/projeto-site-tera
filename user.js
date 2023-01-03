let controller = require("../controllers/userController.js");

module.exports = function(app){

    app.post("/api/users/singin", auth.login);
    app.post("/api/users", controller.createUser);
    app.get("/api/users", controller.getAllUsers);
    app.get("/api/users/:id", controller.getUser);
    app.put("/api/users/:id", controller.updateUser);
    app.delete("/api/users/:id", controller.deleteUser);


}