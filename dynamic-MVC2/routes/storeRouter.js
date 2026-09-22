const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");


storeRouter.get("/", storeController.getIndex);
storeRouter.get("/index", storeController.getHome );
storeRouter.get("/home-list", storeController.getHome);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourite-list", storeController.getFavouriteList);

exports.storeRouter = storeRouter;
