const mongo = require('mongodb');
const mongoClient = mongodb.MongoClient;

const MONGO_URL = "const MONGO_URL = mongodb+srv://tannuminhaj_db_user:6IyMePNYgaXwqoq2@learn-mongodb.ffrtyxe.mongodb.net/?appName=learn-MongoDB";

const mongoConnect = (callback) => {
    mongoClient.connect(MONGO_URL)
    .then((client) => {
        console.log('This is client',client)
    })
    .catch((error) => {
        console.log('this is error in mongo db', error)
    })

}