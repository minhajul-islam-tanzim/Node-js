const Home = require("../models/homeDataShow");




// form tag gula jeii path e ache seii khane niye jabe 
exports.getAddHome = (req, res, next) => {
    res.render("host/edit-home", 
        {pageTitle: 'Form path',
             value: 'add-home',
                editing: false,
      
  })

}

// form jokhon submit korbe tokhon eii function ta colbe 
exports.postAddHome = (req, res, next) => {
    const {houseName, price, location, rating, photoUrl} = req.body
    const home = new Home(houseName, price, location, rating, photoUrl)

    home.save()

    res.render("host/contactSuccess",{pageTitle: 'successFully Run', value: 'add-home'})
    
}


// same like / path 
exports.getHostHome = (req, res, next) => {

  Home.fetchAll((registerHome) => {
    res.render("host/host-home-list", {
      registerHome: registerHome,
      pageTitle: "Host homes",
      value: "host-home",
    });
  });
};


// home edit korbe 
exports.getEditHome = (req, res, next) => {

  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeId, home => {
    if(!home){
      console.log("home is not here")
      return res.redirect("host/host-home-list")
    }
    console.log(home)
      console.log('thats all ', homeId, editing)
  res.render('host/edit-home', {
    pageTitle: 'Edit your home', value: 'host-home',
    editing: editing,
    home: home
  })

  })


}