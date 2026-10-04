// external module
const express = require("express");

// core module
const path = require("path");

// local module
const error = require("./controllers/error");
const { storeRouter } = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");

const {authRouter} = require('./routes/authRouter')

const rootDir = require("./utils/utils");
const mongoose = require("mongoose");

const app = express();

// for tailwind css and css
app.use(express.static("public"));

// for ejs use i have set ejs in engine and set path
app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));

// middleware
app.use((req, res, next) => {
  console.log("first", req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.isLoggedIn = req.get('Cookie')?.split('=')[1] || false;
  console.log(req.isLoggedIn);
  next()

})


app.use(authRouter)

app.use(storeRouter);

app.use("/host",(req, res, next) => {
  if(req.isLoggedIn){
    next()
  }else{
    res.redirect('/login')
  }

});

app.use("/host", hostRouter);

app.use(error.error);

const PORT = 3002;


const DB_PATH = "mongodb+srv://tannuminhaj_db_user:6IyMePNYgaXwqoq2@learn-mongodb.ffrtyxe.mongodb.net/airbnb?appName=learn-MongoDB"

mongoose.connect(DB_PATH).then(() => {
    console.log('Connected with MongooDB')
    app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log("There is something wrong in db", err)
})