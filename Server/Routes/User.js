const express = require('express');
const { registerUser , loginUser, checkAuthentication } = require('../Controllers/User');
const userRouter = express.Router();

userRouter.post('/sign-up' , registerUser);
userRouter.post('/sign-in' , loginUser);
userRouter.get('/check-auth' , checkAuthentication);

module.exports = userRouter;