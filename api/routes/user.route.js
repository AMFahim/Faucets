const express = require("express");
const UsersController = require("../controllers/user.controller");
const usersRoute = express.Router();


usersRoute
.route("/")
.get(UsersController.all)
.post(UsersController.Register)

usersRoute
.route("/login")
.post(UsersController.Login)

usersRoute
.route("/:id")
.get(UsersController.FindAUserById)

module.exports = usersRoute;