const Home = require("../models/homeDataShow");





exports.getAddHome = (req, res, next) => {
    res.render("host/home-added", 
        {pageTitle: 'Form path',
             value: 'add-home'})

}


exports.getHostHome = (req, res, next) => {
  Home.fetchAll((registerHome) => {
    res.render("host/host-home-list", {
      registerHome: registerHome,
      pageTitle: "Host homes",
      value: "host-home",
    });
  });
};


exports.postAddHome = (req, res, next) => {

    const {houseName, price, location, rating, photoUrl} = req.body

    const home = new Home(houseName, price, location, rating, photoUrl)

    home.save()

    res.render("host/contactSuccess",{pageTitle: 'successFully Run', value: 'add-home'})
    
}

