
const express = require("express");


const app = express();

app.use((req, res, next) => {
    console.log("first Dummy middleware", req.url, req.method)
    next()
});

app.use((req, res, next) => {
    console.log("second dummy middleware", req.url, req.method)
})

app.use((req, res, next) => {
    console.log("Third middleware", req.url, req.method)
    res.send("<h1>Welcome to complate coading</h1>")
})



const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running on address http://localhost:${PORT}`)
});