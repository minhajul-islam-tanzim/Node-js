// external module 
const express = require("express");


// local module 
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter");



const app = express()



app.use((req, res, next) => {
    console.log("first", req.url, req.method)
    next()
})


app.use(express.urlencoded())
app.use(userRouter)
app.use(hostRouter)


// if user get in wrong path then will be error

app.use((req, res, next) => {
    res.status(404).send(`<h3>Browser is getting error</h3>`)

})



const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})


