const Home = require("../models/homeDataShow");





exports.getAddHome = (req, res, next) => {

    res.render("host/contactUs", {pageTitle: 'Form path', value: 'add-home'})

}





exports.postAddHome = (req, res, next) => {

    const {houseName, price, location, rating, photoUrl} = req.body

    const home = new Home(houseName, price, location, rating, photoUrl)

    home.save()

    res.render("host/contactSuccess",{pageTitle: 'successFully Run', value: 'add-home'})
    
}


exports.getHome = (req, res, next) => {
    
Home.fetchAll( registerHome => {
 res.render('store/home-list', {registerHome: registerHome, pageTitle: 'My home', value: 'home'})
})

}

