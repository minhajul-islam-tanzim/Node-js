// ===== Core Module =====
const path = require("path");
const crypto = require("crypto");

// ===== External Module =====
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const multer = require("multer");

// ===== Local Module =====
const error = require("./controllers/error");
const { storeRouter } = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const { authRouter } = require("./routes/authRouter");
const rootDir = require("./utils/utils");

const DB_PATH = "mongodb+srv://tannuminhaj_db_user:6IyMePNYgaXwqoq2@learn-mongodb.ffrtyxe.mongodb.net/airbnb?appName=learn-MongoDB";

const PORT = 3002;

const app = express();








// ===== View (EJS) =====
app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));

// ===== Multer সেটআপ =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),          // ছবি uploads ফোল্ডারে
  filename: (req, file, cb) => {
    const uniqueName = crypto.randomBytes(16).toString("hex");   // র‍্যান্ডম নাম
    cb(null, uniqueName + path.extname(file.originalname));      // নাম + .jpg/.png
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ["image/png", "image/jpeg"];                   // jpg আর jpeg একই, jpeg-ই আসল
  if (allowed.includes(file.mimetype)) {
    cb(null, true);                                              // ছবি হলে নাও
  } else {
    cb(new Error("You can upload only jpg, png, jpeg"));         // না হলে এরর
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },                         // সর্বোচ্চ 2MB
});



// upload folder dorkr hle baanbe na hole banabe na 
const fs = require("fs");                       
fs.mkdirSync("uploads", { recursive: true });   


// ===== Session Store =====
const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "sessions",
});



// ===== Static ফোল্ডার (css, ছবি) =====
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(rootDir, "uploads")));
// app.use("/host/uploads", express.static(path.join(rootDir, "uploads")));



// ===== Middleware =====
app.use((req, res, next) => {
  console.log("first", req.url, req.method);                     // শুধু লগ দেখার জন্য
  next();
});

app.use(express.urlencoded({ extended: true }));                 // সাধারণ ফর্মের লেখা পড়ে

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;                       // লগইন আছে কিনা
  next();
});

// ===== Route =====
app.use(authRouter);                                             // login, signup

app.use((req, res, next) => {                                    // লগইন গার্ড
  if (req.url === "/" || req.url === "/signup" || req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});

app.use(storeRouter);

app.use("/host", upload.single("photo"));                        // শুধু /host এ ছবি ধরবে
app.use("/host", hostRouter);

// ===== Error =====
app.use((err, req, res, next) => {                               // multer এর এরর (বড়/ভুল ফাইল)
  res.status(400).send(err.message);
});

app.use(error.error);                                            

// ===== DB কানেক্ট + সার্ভার চালু =====
mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected with MongoDB");
    app.listen(PORT, () => {
      console.log(`server is running http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("There is something wrong in db", err);
  });