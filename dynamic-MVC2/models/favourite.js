// core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/utils");

  const favouriteDataPath = path.join(rootDir, "data", "favourite.json");


module.exports = class Favourite {


  // age read hobe then call hobe ar callback name jeiita ache oiita holo error er jonno function 

  // eii khane homeID ta asbe controller er postAddfavourite theke ar ekta error function o asbe 
  static addTofavourite(homeId, err){

    // eiikhan jeii favourite name jeii parameter ta ache oiiita callback parameter mane ekta arry of obj jeiita niche theke eshche jodi mile jai mane age add kora thake tahole error dibe na mille id ta push korbe and favourite.json e add hobe 
    this.getFavourite(favourite => {

      if(favourite.includes(homeId)){
        err('home id already exsits in software')
      }else{
        favourite.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourite), err)
      }
    })
  }


// read hbe mane callback(facourite)e data pathabe json.parse hoye obj te pathabe 
  static getFavourite(callback){
    fs.readFile(favouriteDataPath, (err, data) => {
      if(err || !data.length){
        callback([])
      }else{
        callback(JSON.parse(data))
      }
    })
  }

};
