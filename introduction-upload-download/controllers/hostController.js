const Home = require("../models/homeDataShow");


// form tag gula jeii path e ache seii khane niye jabe
exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Form path",
    value: "add-home",
    editing: false,
    isLoggedIn: req.isLoggedIn,
       user: req.session.user,
  });
};

// form jokhon submit korbe tokhon eii function ta colbe edit o kora habe
exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating,  description } =
    req.body;

  if(!req.file){
    return res.status(400).send("Give me Homes Photo");
  }

    const photo = "/uploads/" + req.file.filename; 
    console.log("HEYYYYYYYYY",photo); 

  const home = new Home({
    houseName,
    price,
    location,
    rating,
    photo,
    description,
  });
  home.save().then(() => {
    console.log("saved");
  });
  res.redirect("/host/host-home-list");
};

// same like / path
exports.getHostHome = (req, res, next) => {
  Home.find().then((registerHome) => {
    res.render("host/host-home-list", {
      registerHome: registerHome,
      pageTitle: "Host homes",
      value: "host-home",
      isLoggedIn: req.isLoggedIn,
       user: req.session.user,
    });
  });
};

// home edit korbe
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId)
    .then((home) => {
      if (!home) {
        return res.redirect("/host/host-home-list");
      }

      res.render("host/edit-home", {
        pageTitle: "Edit your home",
        value: "host-home",
        editing: editing,
        home: home,
        isLoggedIn: req.isLoggedIn,
       user: req.session.user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditHome = (req, res, next) => {
  const { _id, houseName, price, location, rating, photo, description } =
    req.body;
  Home.findById(_id).then((home) => {
    home.houseName = houseName;
    home.price = price;
    home.location = location;
    home.rating = rating;
    home.photo = photo;
    home.description = description;
    home.save().then((result) => {
      console.log("Home updated ", result);
    }).catch(err => {
      console.log("Error while updating ", err);
    })
    res.redirect("/host/host-home-list");
  }).catch(err => {
    console.log("Error while finding home ", err);
  });
};


exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findByIdAndDelete(homeId)
    .then(() => {
      console.log('dle')
    })
    .catch((error) => {
      console.log("error for deleting", error);
    })
    .finally(() => {
      res.redirect("/host/host-home-list");
    });
};
