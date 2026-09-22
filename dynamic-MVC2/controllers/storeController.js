const Home = require("../models/homeDataShow");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/index", {
      registerHome: registerHome,
      pageTitle: "airbnb homes",
      value: "index",
    });
  });
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/home-list", {
      registerHome: registerHome,
      pageTitle: "home list",
      value: "home-list",
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/bookings", {
      registerHome: registerHome,
      pageTitle: "My Bookings",
      value: "bookings",
    });
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/favourite-list", {
      registerHome: registerHome,
      pageTitle: "My favourite list",
      value: "favourite",
    });
  });
};


exports.postAddToFavourite = (req, res, next) => {
  console.log("came to to add favourite",req.body)
  res.redirect("/favourite-list")
}




exports.getHomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("at Home Details Page", homeId);

  Home.findById(homeId, (home) => {
    if (!home) {
      res.redirect("/home-list");
    } else {
      res.render("store/home-detail", {
        home:home,
        pageTitle: "Home Details",
        value: "home",
      });
    }
  });
};
