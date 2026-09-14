const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home",(req, res, next) => {
    console.log("first", req.url, req.method);
    res.sendFile()
})


hostRouter.post("/add-home",(req, res, next) => {
    console.log("first", req.url, req.method, req.body);
    res.send(`<h1>${req.body.houseName + " " }Register succesfully</h1>
        <a href="/">Go to home</a>
        `)
})

module.exports = hostRouter;
