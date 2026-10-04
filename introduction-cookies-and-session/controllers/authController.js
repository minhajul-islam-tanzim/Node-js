exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    value: "login",
    editing: false,
  });
};

exports.postLogin = (req, res, next) => {
  console.log('post is here ', req.body)
  res.redirect('/')

}