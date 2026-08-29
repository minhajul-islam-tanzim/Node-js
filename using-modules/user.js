const serverHandle = (req, res) => {
  console.log(req.method, req.url);
  res.setHeader("content-type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<title>hello</title>");
    res.write("<body><h1>Enter your details</h1>");

    res.write('<form action="/submit" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter Name"><br>',
    );

    res.write('<input type="radio" name="gender" id="male" value="male">');
    res.write('<label for="male">Male</label>');

    res.write('<input type="radio" name="gender" id="female" value="female">');
    res.write('<label for="female">Female</label>');

    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      console.log(params);

      const bodyObj = {};

      for (const [key, value] of params.entries()) {
        bodyObj[key] = value;
      }

      console.log();
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};


module.exports = serverHandle;