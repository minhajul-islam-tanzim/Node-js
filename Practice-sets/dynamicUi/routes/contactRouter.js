// Core module 
const path = require('path')
// external module 
const express = require('express');
// Local module 
const rootDir = require('../utils/utils')

const  contactRouter = express.Router()


contactRouter.get("/add-home",(req, res, next) => {
    console.log("first", req.url, req.method);
    res.render("contactUs", {pageTitle: 'Form path', value: 'add-home'})

})

const registerHome = []

contactRouter.post("/add-home",(req, res, next) => {

    registerHome.push(req.body)

    console.log("first", req.url, req.method, req.body);

    res.render("contactSuccess",{pageTitle: 'successFully Run', value: 'add-home'})
    
})


exports.contactRouter = contactRouter;
exports.registerHome = registerHome;
