const Favourite = require("../models/favourite");

const Home = require("../models/homeDataShow");

  
exports.getIndex = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/index", {
      registerHome: registerHome,
      pageTitle: "airbnb homes",
      value: "index",
    });
  });
  };




// Home list Page 
exports.getHome = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/home-list", {
      registerHome: registerHome,
      pageTitle: "home list",
      value: "home-list",
    });
  });
};



// for Booking Page 
exports.getBookings = (req, res, next) => {
  Home.find().then((registerHome) => {
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


//  for favourite list >>>

exports.getFavouriteList = (req, res, next) => {

Favourite.find().then((favourite) => {

  const favourites = favourite.map((fav) => fav.homeId.toString())
  console.log('there is ', favourite)
  
Home.find().then((registerHome) => {
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
  Favourite.findOne({homeId}).then((fav) => {
    if(!fav){
      const fav = new Favourite({homeId})
      fav.save()
    }
  }).then(() => {
     res.redirect("/favourite-list");
  }).catch((err) => {
    console.log(err)
  })

}


exports.postRemoveFromFavourit = (req, res, next) => { 
 const delHomeId = req.params.homeId 
 Favourite.findOneAndDelete(delHomeId).then( result => {
  console.log('delete success fully')
 }).catch(err => {
  console.log('there is some wrong', err)
 }).finally( () =>  res.redirect('/favourite-list')
 )

}