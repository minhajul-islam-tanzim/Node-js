// core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/utils");

  const favouriteDataPath = path.join(rootDir, "data", "favourite.json");


module.exports = class Favourite {


  static addTofavourite(homeId, callback){
    this.getFavourite(favourite => {
      if(favourite.includes(homeId)){
        callback('home id already exsits in software')
      }else{
        favourite.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourite), callback)
      }
    })

  }

  static getFavourite(callback){
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data): [])
    })
  }

};
