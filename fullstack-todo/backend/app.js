require("dotenv").config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")


const app = express();


app.use(cors());
app.use(express.json());


app.get("/" , (req, res, next) => {
    res.send("Hello")
});


const PORT = process.env.PORT || 3002



mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log('server is running', PORT)
        })

}).catch((err) => {
    console.log("there is something wrong connected with mongoDB", err)

})