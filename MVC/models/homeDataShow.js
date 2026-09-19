// core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/utils");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  
  save() {
    

    Home.fetchAll((registerHome) => {
        registerHome.push(this)
        const homeDataPath = path.join(rootDir, "data", "homes.json")

        fs.writeFile(homeDataPath, JSON.stringify(registerHome),error  => {
            console.log('file is not working', error)
        })

    })
    
  }



static fetchAll(callback) { 
    const homeDataPath = path.join(rootDir, "data", "homes.json")
    fs.readFile(homeDataPath, (err, data) => {
        if(!err && data){
            callback(JSON.parse(data))
        }else{
            callback([])
        }
    })

}
};
