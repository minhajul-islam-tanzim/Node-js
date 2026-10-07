const { check, validationResult } = require("express-validator");
const User = require("../models/userData");
const bcrypt = require("bcrypt");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    value: "login",
    isLoggedIn: false,
    errors: []
  });
};



exports.postLogin = async (req, res, next) => {
  const {email, password} = req.body;
    console.log("Login email:", email);

  const user = await User.findOne({ email });
  console.log("Found user:", user);
  if (!user) {
    return res.status(422).render("auth/login", {
      pageTitle: "Login",
      value: "login",
      isLoggedIn: false,
      errors: ["Email not found"],
    });
  }

  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};



exports.getSignUp = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "SignUp",
    value: "signup",
    isLoggedIn: false,
    errors: [],
    oldInput: {},
  });
};

exports.postSignUp = [
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First Name should be atleast 2 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First Name should contain only alphabets"),

  check("lastName")
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("Last Name should contain only alphabets"),

  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password should be atleast 8 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password should contain atleast one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password should contain atleast one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password should contain atleast one number")
    .matches(/[!@&]/)
    .withMessage("Password should contain atleast one special character")
    .trim(),

  check("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),

  check("userType")
    .notEmpty()
    .withMessage("Please select a user type")
    .isIn(["guest", "host"])
    .withMessage("Invalid user type"),

  check("terms")
    .notEmpty()
    .withMessage("Please accept the terms and conditions")
    .custom((value, { req }) => {
      if (value !== "on") {
        throw new Error("Please accept the terms and conditions");
      }
      return true;
    }),

  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(422).render("auth/signup", {
        pageTitle: "SignUp",
        value: "signup",
        isLoggedIn: false,
        errors: errors.array().map((err) => err.msg),
        oldInput: { firstName, lastName, email, password, userType },
      });
    }

    bcrypt.hash(password, 12).then((hashPassword) => {
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashPassword,
        userType,
      });
      user
        .save()
        .then(() => {
          console.log(user);
          res.redirect("/login");
        })
        .catch((err) => {
          return res.status(422).render("auth/signup", {
            pageTitle: "SignUp",
            value: "signup",
            isLoggedIn: false,
            errors: [err],
            oldInput: { firstName, lastName, email, password, userType },
          });
        });
    });
  },
];
