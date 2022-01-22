

const http = require("http");
const express = require("express");

const app = express();


http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World!");
  res.end();
})

app.get("/", function(req, res) {
  res.render("")
})
app.post("/", (req, res) => {

})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(err){
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
