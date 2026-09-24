// core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/utils");

  // JSON Data File => home.json
  const homeDataPath = path.join(rootDir, "data", "homes.json");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.id = Math.random().toString();
  }


  save() {
    Home.fetchAll((registerHome) => {
      registerHome.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
        console.log("file is not working", error);
      });
    });
  }


// 1. eita cole and read kore Json file ta jodi kono data theke tahole callback mane registerHome name function er moddhe pathiye deii JSON theke parse kore
  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      if (!err && data.length > 0) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }




  


static findById(homeId, callback){
    this.fetchAll(homes => {
    const homeDetails = homes.find( home => home.id === homeId)
    callback(homeDetails)
    })
}
};
