// core module

const { getdb } = require("../utils/dataBaseUtils");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getdb();
    return db.collection("favourite").insertOne(this);
  }

  static getFavourite() {
        const db = getdb();
    return db.collection("favourite").find().toArray();
  }

  static deleteById(delHomeId, callback) {}
};
