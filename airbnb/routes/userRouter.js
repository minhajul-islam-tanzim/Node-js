const express = require("express");
const path = require('path')


const rootDir = require('../utils/pathUtil')


const userRouter = express.Router();

userRouter.get("/",(req, res, next) => {
    console.log("first", req.url, req.method);
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
})

module.exports = userRouter;

