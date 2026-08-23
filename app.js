
const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.headers, req.method, req.url)
   res.setHeader('content-type', 'text/html')

   if(req.url === '/'){

       res.write('<html>')
       res.write('<title>hello</title>')
       res.write('<body>Home</body>')
       res.write('</html>')
      return res.end()
   }
         res.write('<html>')
       res.write('<title>hello</title>')
       res.write('<body>Others page</body>')
       res.write('</html>')
       res.end()


}
);

const PORT = 3001


server.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})