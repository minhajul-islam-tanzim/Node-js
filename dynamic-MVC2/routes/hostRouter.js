
const express = require('express');
const  hostController = require('../controllers/hostController')

const  hostRouter = express.Router()


hostRouter.get("/add-home", hostController.getAddHome)

hostRouter.post("/add-home", hostController.postAddHome)

hostRouter.get("/host-home-list", hostController.getHostHome)

hostRouter.get("/edit-home/:homeId", hostController.getEditHome)

exports.hostRouter = hostRouter;
