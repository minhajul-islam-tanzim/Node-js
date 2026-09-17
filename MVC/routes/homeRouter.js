
const express = require("express");

const {registerHome} = require('../controllers/addHome')

const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  console.log("handling /for Get ", req.url, req.method);
  res.render('home', {registerHome: registerHome, pageTitle: 'My home', value: 'home'})
});

exports.homeRouter = homeRouter;
