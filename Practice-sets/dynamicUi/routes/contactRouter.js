// Core module 
const path = require('path')
// external module 
const express = require('express');
// Local module 
const rootDir = require('../utils/utils')

const  contactRouter = express.Router()


contactRouter.get("/add-home",(req, res, next) => {
    console.log("first", req.url, req.method);
    res.render("contactUs", {pageTitle: 'Form path'})

})

const registerHome = []

contactRouter.post("/add-home",(req, res, next) => {

    registerHome.push({houseName: req.body.houseName})

    console.log("first", req.url, req.method, req.body);

    res.render("contactSuccess",{pageTitle: 'successFully Run'})
    
})


exports.contactRouter = contactRouter;
exports.registerHome = registerHome;
