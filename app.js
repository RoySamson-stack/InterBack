

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
//creating the https server

const server = https.createServer(function(req, res) {
  var reqUrlString = req.url;
  var urlObject = require("url").parse(reqUrlString, true);
  var pathname = urlObject.pathname;

//having dummy information that would be passed from the front end to the server
  var fileName = urlObject.pathname.substring(1);
  //this is the POST request that would be sent from the front end
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

    //this is the GET request that would be sent to the server
    fs.readFile(fileName, function(err){
      res.writeHead(200, { "Content-Type": "text/html" , "Content-Length": "100"});
      res.write("Success GET request");
      res.end();
    })
  }
})

server.listen(port);

