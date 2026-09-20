const Home = require("../models/homeDataShow");




exports.getHome = (req, res, next) => {
    
Home.fetchAll( registerHome => {
 res.render('store/home-list', {registerHome: registerHome, pageTitle: 'My home', value: 'home'})
})

}

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("store/bookings", {
      registerHome: registerHome,
      pageTitle: "My Bookings",
      value: "bookings",
    });
  });
};