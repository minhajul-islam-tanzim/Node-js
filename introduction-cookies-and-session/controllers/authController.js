exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    value: "login",
    editing: false,
  });
};