const sumReqHandler = (req, res) => {
  console.log(`In Sum Handeler`, req.url);
  const body = [];
  req.on("data", (chunk) => {
    console.log('Chunk is:',chunk);
    body.push(chunk);
  });

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    console.log('fullBody:' ,fullBody);
    const params = new URLSearchParams(fullBody);
    console.log('params :' ,params);
    const bodyObj = Object.fromEntries(
        [...params].map(([key, value]) => [key, Number(value)])

    )
        
    console.log('Letest Object is :' ,bodyObj);

        const result = bodyObj.first + bodyObj.second;
        console.log(result)
          res.setHeader("content-type", "text/html");
            res.write(`
      <html>
      <title>Result</title>
      <body><h1>${result}</h1>
      <a href="/">Home</a>
      </body>
      </html>
      `);
  return res.end();



  });
        




};

exports.sumReqHandler = sumReqHandler;
