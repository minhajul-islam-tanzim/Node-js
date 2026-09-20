const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");


storeRouter.get("/", storeController.getHome);
storeRouter.get("/bookings", storeController.getBookings);

exports.storeRouter = storeRouter;
