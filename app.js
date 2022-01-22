

const http = require("http");
const express = require("express");
// const ejs = require("ejs");

const app = express();

// app.set('view engine', "ejs")

http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World!");
  res.end();
})

app.get("/", function(req, res, err) {
  res.status(err.status || 500);res.json({
    message: err.message,
    error: err
  });
})
app.post("/", (req, res) => {

})


// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }

app.listen(5500, function(err){
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on 5500`)
})
