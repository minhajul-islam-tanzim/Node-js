const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: String,

  email: {
    type: String,
    required: [true, "email is requred"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  userType: {
    type: String,
    enum : ["guest", "host"],
    default: "guest",
  },
  favourites: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "Home"
  }]
});

module.exports = mongoose.model("User", userSchema);
