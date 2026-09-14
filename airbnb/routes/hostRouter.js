const express = require("express");
const hostRouter = express.Router();


hostRouter.get("/add-home",(req, res, next) => {
    console.log("first", req.url, req.method);
    res.send(`
        
        <h1>Register your home here:</h1>

        <form action = "/host/add-home" method="POST">

            <input type="text" name="houseName" placeholder="Enter your house name""/>
            <input type="submit"/>
            
        </form>
        `)
})


hostRouter.post("/add-home",(req, res, next) => {
    console.log("first", req.url, req.method, req.body);
    res.send(`<h1>${req.body.houseName}Register succesfully</h1>
        <a href="/">Go to home</a>
        `)
})

module.exports = hostRouter;
