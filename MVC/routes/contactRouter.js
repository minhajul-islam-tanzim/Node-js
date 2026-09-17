// Core module 
// const path = require('path')
// external module 
const express = require('express');
// Local module 
// const rootDir = require('../utils/utils')
const addHome = require('../controllers/addHome')

const  contactRouter = express.Router()


contactRouter.get("/add-home", addHome.getAddHome)

contactRouter.post("/add-home", addHome.postAddHome)


exports.contactRouter = contactRouter;
