// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var url = require("url");


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/*", function (request, response) {
  var inputDate = decodeURI(request.url.substring(1)); //this is a string that can be read by the date parser
  var unix;
  //check if the input is already a unix code, else transform it
  if((/^-?[0-9]{1,}$/).test(inputDate)){
    unix = parseInt(inputDate);
  } else {
    unix = Date.parse(inputDate);
  }
  
  //transform the unix code in a human readeble date
  var natural = new Date(unix).toDateString();
  if (natural == "Invalid Date") natural = null;
  //send both back
  response.send({
    unix : unix,
    natural : natural
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT);
