const Home = require("../models/homeDataShow");

// form tag gula jeii path e ache seii khane niye jabe
exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Form path",
    value: "add-home",
    editing: false,
  });
};

// form jokhon submit korbe tokhon eii function ta colbe edit o kora habe 
exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl,description, id } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl,description, id);
  home.save();
  res.redirect("/host/host-home-list");

};






// same like / path
exports.getHostHome = (req, res, next) => {
  Home.fetchAll().then(([registerHome, fields]) => {

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
  const editing = req.query.editing === "true";

  Home.findById(homeId)
    .then(([homes]) => {
      const home = homes[0];

      if (!home) {
        console.log("home is not here");
        return res.redirect("/host/host-home-list");
      }

      res.render("host/edit-home", {
        pageTitle: "Edit your home",
        value: "host-home",
        editing: editing,
        home: home,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId 
    Home.deleteById(homeId).then(  res.redirect("/host/host-home-list")).catch((error) => {
        console.log("error for deleting", error)
    }) 

}