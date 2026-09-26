// core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/utils");

// JSON Data File => home.json
const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  // submit korar kore eii kaane asbe sob value
  constructor(houseName, price, location, rating, photoUrl, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.id = id;
  }

  // eii khane registerHome mane oii home.json file take read kore data gula call back e pathaiche ar ei khane (this) diye registerHome e ager data te submit how new valure pushkore dewa hoyeche seei ta abar home.json file e write hoiii
  save() {
    Home.fetchAll((registerHome) => {
      if (this.id) {
        // edit home
        registerHome = registerHome.map((home) =>
          home.id === this.id ? this : home
        );
      } else {
        // add new home
        this.id = Math.random().toString();
        registerHome.push(this);
      }
      fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
        console.log("file is not working", error);
      });




fs.writeFile(homeDataPath, JSON.stringify(registerHome), (error) => {
        console.log("file is not working", error);
      });

    });
  }

  // 1. eita cole and read kore Json file ta jodi kono data theke tahole callback mane registerHome name function er moddhe pathiye deii JSON theke parse kore Home e bosai
  static fetchAll(callback) {
    fs.readFile(homeDataPath, (error, data) => {
      if (!error && data.length > 0) {
        // eii khane json.parese mane OBJ kora hoyeche json format theke
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  //  je home e click kora hoyeche tar id match kore kina taii eii function ar eii ta call back e match hoye id ala obj ta pathai

  static findById(homeId, callback) {
    Home.fetchAll((homes) => {
      const homeDetails = homes.find((home) => home.id === homeId);
      callback(homeDetails);
    });
  }

  static deleteById(homeId, callback) {
    Home.fetchAll(registerHome => {
        const updateHome = registerHome.filter(home => home.id !== homeId)
        fs.writeFile(homeDataPath, JSON.stringify(updateHome), callback)
    })
  }
};
