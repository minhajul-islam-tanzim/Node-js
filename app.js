
const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.headers, req.method, req.url)
   res.setHeader('content-type', 'text/html')

   if(req.url === '/'){

       res.write('<html>')
       res.write('<title>hello</title>')
       res.write('<body><h1>Enter your details</h1>')
       res.write('<form>')
       res.write('<input type="text" name="username placeholder="Enter Name""><br>')

       res.write('<label for="gender">Gender</label>')

       res.write('<input type="radio" id="male" value="male">')
       res.write('<label for="male">Male</label>')

       res.write('<input type="radio" id="female" value="female">')
       res.write('<label for="female">Female</label>')
       
       res.write('<button type="submit">Submit</button>')
       res.write('</form>')
        res.write('</body>')
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