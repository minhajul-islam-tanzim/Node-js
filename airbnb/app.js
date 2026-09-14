// external module 
const express = require("express");
const path = require('path')
const rootDir = require('./utils/pathUtil')


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
app.use("/host",hostRouter)


// if user get in wrong path then will be error

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})



const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})


