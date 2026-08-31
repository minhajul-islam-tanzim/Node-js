const { sumReqHandler } = require("./sum");

const calculatorHandeler = (req, res) => {
  console.log(req.method, req.url);
  res.setHeader("content-type", "text/html");

  if (req.url === "/") {
    res.write(`
      <html>
      <title> Calculator </title>
      <body><h1>Welcome to calculator</h1>
      <a href="/calculator">Go to Calculator</a>
      </body>
      </html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write(`
      <html>
      <title> enter</title>
      <body><h1>Enter your number</h1>
          <form action="/calculate" method="POST">

            <input type="text" placeholder="First Number" name="first">
            <input type="text" placeholder="Second Number" name="second">
            <input type ="submit" value="Sum"> 

          </form>
      <a href="/calculator">Go to Calculator</a>
      </body>
      </html>
      `);
    return res.end();
  } else if(req.url.toLowerCase() === '/calculate' && req.method === "POST"){
          return sumReqHandler(req, res);
  }


  res.write(`
      <html>
      <title> 404 </title>
      <body><h1> 404 page is not found </h1>
      <a href="/">reload please</a>
      </body>
      </html>
      `);
  return res.end();
};

exports.calculatorHandeler = calculatorHandeler;
