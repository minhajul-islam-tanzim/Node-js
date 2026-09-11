
// core module 
const http = require("http");

// external module 
const express = require("express")

// locla module 
const serverHandle = require("./user")

const server = http.createServer(serverHandle)

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});
 
