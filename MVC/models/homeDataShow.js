// core module 
const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/utils')

// fake database 
const registerHome = []


module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl
    }

    save() {
        registerHome.push(this)
        const homeDataPath = path.join(rootDir, 'data', 'homes.json')
        fs.writeFile(homeDataPath, JSON.stringify(registerHome), error => {
            console.log('file Write not working', error)
        })
    }

    static fetchAll(){
        return registerHome;
    }

}