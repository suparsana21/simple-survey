var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
app.use(bodyParser.json())
var path = require ('path');


app.get('/getScore', function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.write(data);
    res.end();
  });
})

app.get('/nextPage', function(req,res){
  fs.readFile('secondPage.html', function (err, data) {
     res.write(data);
     res.send();
  });
})

app.get('/FirstPage.html', function(req,res){
  fs.readFile('FirstPage.html', function (err, data) {
     res.write(data);
     res.send();
  });
})
app.get('/privacy.html', function(req,res){
  fs.readFile('privacy.html', function (err, data) {
     res.write(data);
     res.send();
  });
})

app.get('/lastPage', function(req,res){
  fs.readFile('thirdPage.html', function (err, data) {
     res.write(data);
     res.send();
  });
})
app.use(express.static(path.join(__dirname,'public')));
app.listen(8080, () => {
  console.log('App running..')
  console.log('Visit localhost:8080/getScore')
})