const http = require('http')
const { calculatorHandeler } = require('./user')

const server =  http.createServer(calculatorHandeler)


const PORT = 3001
;
server.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`)
} )
