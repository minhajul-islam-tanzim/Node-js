
const express = require("express");



const addHome = require('../controllers/homeController')


const homeRouter = express.Router();

homeRouter.get("/", addHome.getHome);

exports.homeRouter = homeRouter;
