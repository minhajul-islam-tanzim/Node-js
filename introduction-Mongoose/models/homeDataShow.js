// houseName: this.houseName,
//     price: this.price,
//     location: this.location,
//     rating: this.rating,
//     photoUrl: this.photoUrl,
//     description: this.description,

// save()
//   static fetchAll()
//       static findById(homeId)
//         static deleteById(homeId)

const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  houseName: {
     type: String,
     required: true 
    },

  price: { 
    type: Number, 
    required: true
   },

  location: {
     type: String,
     required: true
     },

  rating: Number,
  photoUrl: String,
  description: String,
});

module.exports = mongoose.model("Home", homeSchema)
