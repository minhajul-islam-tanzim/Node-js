// core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/utils");
const { error } = require("console");

  // JSON Data File => home.json
  const homeDataPath = path.join(rootDir, "data", "homes.json");


module.exports = class Home {
  // submit korar kore eii kaane asbe sob value
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.id = Math.random().toString();
  }

    // eii khane registerHome mane oii home.json file take read kore data gula call back e pathaiche ar ei khane (this) diye registerHome e ager data te submit how new valure pushkore dewa hoyeche seei ta abar home.json file e write hoiii   
  save() {
    Home.fetchAll((registerHome) => {
      registerHome.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
        console.log("file is not working", error);
      });
    });
  }


// 1. eita cole and read kore Json file ta jodi kono data theke tahole callback mane registerHome name function er moddhe pathiye deii JSON theke parse kore Home e bosai 
  static fetchAll(callback) {
  fs.readFile(homeDataPath, (error, data)=> {
      if(!error && data.length > 0){
        // eii khane json.parese mane OBJ kora hoyeche json format theke 
        callback(JSON.parse(data))
      } else {
        callback([])
      }
  })
  }



static findById(homeId, callback){
    this.fetchAll(homes => {
    const homeDetails = homes.find( home => home.id === homeId)
    callback(homeDetails)
    })
}
};
