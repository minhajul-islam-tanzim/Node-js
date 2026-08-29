
const http = require('http')

const server = http.createServer((req, res) => { 
        console.log(req.headers, req.method, req.url)
        res.setHeader('Content-Type', 'text/html')

        if(req.url === "/home"){
            res.write('<h1>Welcome to home</h1>')
            return res.end()
        } else if (req.url === "/man"){
            res.write('<h1>Welcome to man</h1>')
                return res.end()
        }
         else if (req.url === "/women"){
            res.write('<h1>Welcome to Women</h1>')
                return res.end()
        }
         else if (req.url === "/kids"){
            res.write('<h1>Welcome to hoem</h1>')
                return res.end()
        }  




        res.write(`
                <!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>

    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/man">Man</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
        </ul>
    </nav>

</body>
</html>
            
            `)
            res.end()

})



const PORT = 3001;

 server.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})