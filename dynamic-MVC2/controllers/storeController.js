const Favourite = require("../models/favourite");

const Home = require("../models/homeDataShow");


//1. fetch call kore sob bar ana hocche ar =registerHome= hocche kono array na eii ta call back function er parameter eii khane JSon er data obj hoye karon oii khane parse kore pathano hoyeche   
exports.getIndex = (req, res, next) => {
  Home.fetchAll( (registerHome) => {
    res.render("store/index", {
      registerHome: registerHome,
      pageTitle: "airbnb homes",
      value: "index",
    });
  });
};



// Home list Page 
exports.getHome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/home-list", {
      registerHome: registerHome,
      pageTitle: "home list",
      value: "home-list",
    });
  });
};



// for Booking Page 
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

Favourite.getFavourite((favourite) => {
  Home.fetchAll((registerHome) => {
    const favouriteHome = registerHome.filter(home => favourite.includes(home.id))
    res.render("store/favourite-list", {
      favouriteHome: favouriteHome,
      pageTitle: "My favourite list",
      value: "favourite",
    });
  });
})  
};



exports.postAddToFavourite = (req, res, next) => {
  
  console.log("came to to add favourite",req.body)
  Favourite.addTofavourite(req.body.id, error => {
    if(error){
      console.log('error is coming and destroy your app')
    }
    res.redirect('/favourite-list')
  })

}



// every single home Details page
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
