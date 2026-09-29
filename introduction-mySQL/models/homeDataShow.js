
module.exports = class Home {

  constructor(houseName, price, location, rating, photoUrl, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.id = id;
  }


  save(){


  }

  static fetchAll(callback) {
  
  }

  

  static findById(homeId, callback) {

  }


  
  static deleteById(homeId, callback) {
  
  }
};
