// Core module 
const path = require('path')
// external module 
const express = require('express');
// Local module 
const { registerHome } = require('./contactRouter')


const homeRouter = express.Router()


homeRouter.get("/" ,(req, res, next) => {
        console.log(registerHome)
        console.log("handling /for Get ", req.url, req.method);
                res.render('home', {registerHome: registerHome, pageTitle: 'airbnbHome'})
})

module.exports = homeRouter;