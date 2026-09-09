const http = require("http");
const serverHandle = require("./user")

const server = http.createServer(serverHandle);


const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});
 
