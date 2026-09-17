


exports.getAddHome = (req, res, next) => {
    console.log("first", req.url, req.method);
    res.render("contactUs", {pageTitle: 'Form path', value: 'add-home'})

}

const registerHome = []

exports.postAddHome = (req, res, next) => {

    registerHome.push(req.body)

    console.log("first", req.url, req.method, req.body);

    res.render("contactSuccess",{pageTitle: 'successFully Run', value: 'add-home'})
    
}

exports.registerHome = registerHome;
