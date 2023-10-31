const { getAll, create, getUser, deleteUser, updateUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
        .post(create)
        

userRouter.route("/:id")
        .get(getUser)
        .delete(deleteUser)
        .put(updateUser);

module.exports = userRouter;