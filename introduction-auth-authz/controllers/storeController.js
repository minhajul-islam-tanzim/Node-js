const Favourite = require("../models/favourite");

const Home = require("../models/homeDataShow");

  
exports.getIndex = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("store/index", {
      registerHome: registerHome,
      pageTitle: "airbnb homes",
      value: "index",
    isLoggedIn: req.session.isLoggedIn,
       user: req.session.user,
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
    isLoggedIn: req.session.isLoggedIn,
       user: req.session.user,
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
      isLoggedIn: req.session.isLoggedIn,
       user: req.session.user,
    });
  }).catch(() => {
    console.log('not available')
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
      isLoggedIn: req.session.isLoggedIn,
       user: req.session.user,
      });
    }
  });
};


//  for favourite list >>>

exports.getFavouriteList = (req, res, next) => {

Favourite.find()
.populate('homeId')
.then((favourite) => {
  console.log(favourite, "This is populate result>>>>>")
const favouritesHome = favourite.map((fav) => fav.homeId)
console.log('there is ',  favouritesHome)
    res.render("store/favourite-list", {
      favouriteHome:favouritesHome,
      pageTitle: "My favourite list",
      value: "favourite",
      isLoggedIn: req.session.isLoggedIn,
       user: req.session.user,
    });
  });
}
;



exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id
  Favourite.findOne({homeId : homeId}).then((fav) => {
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