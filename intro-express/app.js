

const express = require("express")


const serverHandle = require("./user")

const app = express()



app.use("/",(req, res, next) => {

  console.log("first middleware", req.url, req.method)
    next()
})

app.get("/sub",(req, res, next) => {

  console.log("second middleware", req.url, req.method)
  res.send('<h1>Express</h1>')
  next()
})

app.use("/",(req, res, next) => {

  console.log("third middleware", req.url, req.method)
  res.send('<h1>Express js</h1>')
})



const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});
 
