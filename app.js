

const https = require("https");
const express = require("express");
const fs = require("fs");
// const ejs = require("ejs");

const app = express();

// app.set('view engine', "ejs")

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

const server = https.createServer(function(req, res) {
  var reqUrlString = req.url;
  var urlObject = require("url").parse(reqUrlString, true);
  var pathname = urlObject.pathname;


  var fileName = urlObject.pathname.substring(1);
  if("POST " == method){
    var postData = "";
    req.on("data", function(data) {
      postData += data;
    });
    req.on("end", function() {
      var postObject = JSON.parse(postData);
      var postData = postObject.data;
    });
  }else{
    fs.readFile(fileName, function(err){
      res.writeHead(200, { "Content-Type": "text/html" , "Content-Length": "100"});
      res.write("Success GET request");
      res.end();
    })
  }
})

server.listen(port);

