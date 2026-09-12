
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use((req, res, next) => {
    console.log("first Dummy middleware", req.url, req.method)
    next()
});

app.use((req, res, next) => {
    console.log("second dummy middleware", req.url, req.method)
    next()
})

// app.use((req, res, next) => {
//     console.log("Third middleware", req.url, req.method)
//     res.send(`<h1>Welcome to complate coading</h1>`)
// })

app.get("/",(req, res, next) => {
    console.log("second dummy middleware", req.url, req.method)
     res.send(`<h1>Welcome to complate coading</h1>`)
})

app.get("/contact-us",(req, res, next) => {
    console.log("contact us page ", req.url, req.method)
     res.send(`
        <h1>Please give me your details</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your Email" />
        <input type="submit" value="click"/>    
        </form>
        `)
})

app.use(bodyParser.urlencoded())

app.post("/contact-us",(req, res, next) => {
    console.log("handling contact us for POST", req.url, req.method, req.body)
     res.send(`<h1>${req.body.name}</h1>`)
})




const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running on address http://localhost:${PORT}`)
});