

const https = require("https");
const express = require("express");
// const ejs = require("ejs");

const app = express();

// app.set('view engine', "ejs")

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

const server = https.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" , "Content-Length": "0"});
  res.write("Hello World!");
  res.end();
}).listen(port);

