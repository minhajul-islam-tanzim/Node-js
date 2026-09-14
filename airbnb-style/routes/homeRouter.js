// Core module 
const path = require('path')
// external module 
const express = require('express');
// Local module 
const rootDir = require('../utils/utils')


const homeRouter = express.Router()


homeRouter.get("/" ,(req, res, next) => {
        console.log("handling /for Get ", req.url, req.method);
        res.sendFile(path.join(rootDir, "views", "home.html"))

})

module.exports = homeRouter;