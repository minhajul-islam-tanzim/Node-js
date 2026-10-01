const Favourite = require("../models/favourite");

const Home = require("../models/homeDataShow");

  
exports.getIndex = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/index", {
      registerHome: registerHome,
      pageTitle: "airbnb homes",
      value: "index",
    });
  });
  };




// Home list Page 
exports.getHome = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/home-list", {
      registerHome: registerHome,
      pageTitle: "home list",
      value: "home-list",
    });
  });
};



// for Booking Page 
exports.getBookings = (req, res, next) => {
  Home.fetchAll().then((registerHome) => {
    res.render("store/bookings", {
      registerHome: registerHome,
      pageTitle: "My Bookings",
      value: "bookings",
    });
  });
};



// every single home Details page
exports.getHomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("at Home Details Page", homeId);

  Home.findById(homeId).then ((home) => {

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




exports.getFavouriteList = (req, res, next) => {

Favourite.getFavourite().then((favourite) => {

  const favourites = favourite.map(fav => fav.homeId)
  
  Home.fetchAll().then((registerHome) => {
    const favouriteHome = registerHome.filter(home => favourites.includes(home._id.toString()))
    res.render("store/favourite-list", {
      favouriteHome: favouriteHome,
      pageTitle: "My favourite list",
      value: "favourite",
    });
  });
})  
};



exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id
  console.log('home id is here',homeId)
  const fav = new Favourite(homeId)
  fav.save().then(
  (result) => {
    console.log('this is result',result)
  }
  ).catch(
    (error) => {
      console.log('There is something wrong with this code', error)
    }

  ).finally(
    res.redirect('/favourite-list')
  )


}


exports.postRemoveFromFavourit = (req, res, next) => { 
 const delHomeId = req.params.homeId 
 Favourite.deleteById(delHomeId).then( result => {
  console.log('delete success fully')
 }).catch(err => {
  console.log('there is some wrong', err)
 }).finally( () =>  res.redirect('/favourite-list')
 )

}