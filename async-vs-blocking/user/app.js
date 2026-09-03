const serverHandle = require('./user')

const http = require('http');





    const server = http.createServer(serverHandle)

const PORT = 3001;
server.listen(PORT, () => {
        console.log(`Server is Running http://localhost:${PORT}`)
})
