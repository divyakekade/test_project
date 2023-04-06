const express = require('express');
const {createUser, getAllUsers} = require("../controllers/userController");
const Router = express.Router();

Router.route("/createUser").post(createUser);
Router.route("/getAllUsers").get(getAllUsers);

module.exports = Router;