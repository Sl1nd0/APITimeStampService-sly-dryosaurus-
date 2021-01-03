// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var moment = require('moment');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/timestamp/:date_string?", function (req, res) {
  //res.sendFile(__dirname + '/views/index.html');
  /*let params = req.params.date_string;
  
  let realDate = new Date(params); //Convert to date
  let unixDate = Date.parse(realDate); //Convert to unix 
  let today = new Date();
  let results = {};
  today = new Date(Number(params));
  let dateTest = today instanceof Date;
  
  
  if (params == undefined) {
    //  res.
    unixDate = Date.parse(today);
    results.unix = unixDate;
    results.utc = today.toUTCString();
    res.send(results);
  } else if (realDate == "Invalid Date" && dateTest == false) {
    //  res
    results = {"error" : "Invalid Date" };

    res.send(results);
  } else if (realDate != "Invalid Date") {
    unixDate = Date.parse(realDate);
    results.unix = unixDate;
    results.utc = realDate.toUTCString();
    res.send(results); 
  } else if (  dateTest == false) {
     //date = new Date(Number(dateString)); 
    //date = new Date(Number(dateString)); 
      results.unix = Date.parse(today);
      results.utc = today.toUTCString();
      res.send('results'); 
  }

//  console.log(params/1);*/
  
  let dateString = req.params.date_string;
  let date;
  
  if(dateString == undefined){
     date = new Date(); 
  }else if ( (date = new Date(dateString)) == 'Invalid Date' ){
     date = new Date(Number(dateString)); 
  }
  
  if(date == 'Invalid Date'){
    res.json({"error" : "Invalid Date"}); 
  }
  
  let result = {
    unix: date.getTime(),
    utc: date.toUTCString()
  };
  
  res.send(result);
});



// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});