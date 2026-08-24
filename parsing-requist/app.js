
const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.method , req.url)
   res.setHeader('content-type', 'text/html')


    
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

   }else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){ 


            const body = [];
            req.on("data", (chunk) => {
                console.log(chunk)
                body.push(chunk)
            })

        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new URLSearchParams(fullBody);
            console.log(params);

            //     const bodyObj = {}

            // for(const [key, value] of params.entries()){
            //     bodyObj[key] = value
            // }

const bodyObj = Object.fromEntries(params)

            console.log(bodyObj)
                fs.writeFileSync('max.txt',JSON.stringify(bodyObj))


        })



    
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end();
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

