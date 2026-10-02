const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://tannuminhaj_db_user:6IyMePNYgaXwqoq2@learn-mongodb.ffrtyxe.mongodb.net/?appName=learn-MongoDB";

let _db;



const mongoConnect = (callback) => {
    mongoClient.connect(MONGO_URL)
    .then((client) => {
        _db = client.db('airbnb')        
        callback()
    })
    .catch((error) => {
        console.log('this is error in mongo db', error)
    })

}


const getdb = () => {
    if(!_db){
        throw new Error('Mongo not Connected')
    }
    return _db
}


module.exports = {mongoConnect, getdb};
