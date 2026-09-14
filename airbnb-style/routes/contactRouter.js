// Core module 
const path = require('path')
// external module 
const express = require('express');
// Local module 
const rootDir = require('../utils/utils')

const  contactRouter = express.Router()


contactRouter.get("/add-home",(req, res, next) => {
    console.log("first", req.url, req.method);
    res.sendFile(path.join(rootDir, "views", "contactUs.html"))

})


contactRouter.post("/add-home",(req, res, next) => {
    console.log("first", req.url, req.method, req.body);
    res.sendFile(path.join(rootDir, "views", "contactSuccess.html"))
    
})



module.exports = contactRouter;
