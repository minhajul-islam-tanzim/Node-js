const express = require("express");

const app = express()

app.use((req, res, next) => {
    console.log("first", req.url, req.method);
    res.send("<h1>Welcome to airbnb</h1>")
})



const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})


