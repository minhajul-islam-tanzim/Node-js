
const express = require('express');
const  hostController = require('../controllers/hostController')

const  hostRouter = express.Router()

// 2 form path dekhanor jonno get mane form tag er path dekhbe 
hostRouter.get("/add-home", hostController.getAddHome)


// jokhon form tag theke Submit kora hbe ba server kono kichu post korbe tokhon eii post colbe and eii controller colbe 
hostRouter.post("/add-home", hostController.postAddHome)


// same path mane homes gula thakbe get mane server theke pabe 
hostRouter.get("/host-home-list", hostController.getHostHome)


// mane edit kore change korbe taii post 
hostRouter.get("/edit-home/:homeId", hostController.getEditHome)

exports.hostRouter = hostRouter;
