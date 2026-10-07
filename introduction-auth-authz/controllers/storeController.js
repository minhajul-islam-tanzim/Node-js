

const Home = require("../models/homeDataShow");
const User = require("../models/userData");

  
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

exports.getFavouriteList = async (req, res, next) => {

  const userId = req.session.user._id;
  const user  = await User.findById(userId).populate("favourites");
  const favouritesHome = user.favourites;
    res.render("store/favourite-list", {
      favouriteHome:favouritesHome,
      pageTitle: "My favourite list",
      value: "favourite",
      isLoggedIn: req.session.isLoggedIn,
       user: req.session.user,
    });

};




exports.postAddToFavourite =async (req, res, next) => {
  
  const homeId = req.body.id

  const userId = req.session.user._id;

  const user = await User.findById(userId);

  if(!user.favourites.includes(homeId)){
  const res =  user.favourites.push(homeId)
  console.log(res)
    await user.save()
  }
 res.redirect('/favourite-list')

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