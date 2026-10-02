// core module

const { getdb } = require("../utils/dataBaseUtils");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getdb();

      return db.collection("favourite").findOne({homeId : this.homeId}).then( exist => {
        if(!exist){
              return db.collection("favourite").insertOne(this);
        }else{
          return Promise.resolve()
        }
      })

  }


  static getFavourite() {
        const db = getdb();
    return db.collection("favourite").find().toArray();
  }
  

  static deleteById(delHomeId) {
      const db = getdb();
      return db.collection("favourite").deleteOne({ homeId: delHomeId});
  }
};
