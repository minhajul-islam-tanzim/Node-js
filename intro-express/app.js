const http = require("http");


const express = require("express")


const serverHandle = require("./user")

const app = express()

app.use((req, res, next) => {
  console.log("came in first middleware", req.url, req.method)
})

app.use((req, res, next) => {
  console.log("came in second middleware", req.url, req.method)
})


const server = http.createServer(app)

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});
 
