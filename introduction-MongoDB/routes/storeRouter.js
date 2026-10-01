const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");


// For Home Page 
storeRouter.get("/", storeController.getIndex);


// for index page '/'
storeRouter.get("/index", storeController.getHome);

// for home list page
storeRouter.get("/home-list", storeController.getHome);

// Booking page
storeRouter.get("/bookings", storeController.getBookings);

// Every single Home details page
storeRouter.get("/homes/:homeId", storeController.getHomesDetails);


// Favourite list dekhabe 
storeRouter.get("/favourite-list", storeController.getFavouriteList);

// favourite list e add korbe 
storeRouter.post("/favourite-list", storeController.postAddToFavourite);


// for remove to favourite list
storeRouter.post("/favourite/delete/:homeId", storeController.postRemoveFromFavourit)



exports.storeRouter = storeRouter;
