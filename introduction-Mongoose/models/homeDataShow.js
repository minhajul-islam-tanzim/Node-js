// DataBase
const { ObjectId } = require("mongodb");
const { getdb } = require("../utils/dataBaseUtils");

// DataBase Exicute

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;

    if (_id) {
      this._id = _id;
    }
  }

  save() {
    const db = getdb();

    // karon id update how jabe na ta hone new id dite thakbe per change e
    const updateFields = {
      houseName: this.houseName,
      price: this.price,
      location: this.location,
      rating: this.rating,
      photoUrl: this.photoUrl,
      description: this.description,
    };

    if (this._id) {
      // edit
      return db
        .collection("homes")
        .updateOne(
          { _id: new ObjectId(String(this._id)) },
          { $set: updateFields },
        );
    } else {
      // add new home
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAll() {
    const db = getdb();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getdb();
    return db
      .collection("homes")
      .findOne({ _id: new ObjectId(String(homeId)) });
  }

  static deleteById(homeId) {
    const db = getdb();
    return db.collection("homes").deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
