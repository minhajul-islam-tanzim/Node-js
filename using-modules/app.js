const http = require('http');

const server = http.createServer((res, req) => {

    console.log(req.method, req.url)
    res.headers('content-type', 'text-html')

    if(req.url === '/'){
           res.write('<html>')
       res.write('<title>hello</title>')
       res.write('<body><h1>Enter your details</h1>')

    res.write('<form action="/submit-details" method="POST">')
res.write('<input type="text" name="username" placeholder="Enter Name"><br>')

       res.write('<input type="radio" name="gender" id="male" value="male">')
       res.write('<label for="male">Male</label>')

       res.write('<input type="radio" name="gender" id="female" value="female">')
       res.write('<label for="female">Female</label>')

       res.write('<button type="submit">Submit</button>')
       res.write('</form>')
        res.write('</body>')
       res.write('</html>')

      return res.end()

    } else if(req.url.toLowerCase() === '/submit'){

    }else{

    }



})


const PORT = 3001;
server.listen(PORT, () => {
        console.log(`Server is Running http://localhost:${PORT}`)
})

