var express = require('express');
var app = express();
var fs = require("fs");
 
const { exec } = require("child_process");
 
var execfortran = function(appres, callback) {
    exec("./HelloWorld", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        callback (appres);
    });
}
 
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
 
app.get('/showresults', function (req, res) {
    fs.readFile( __dirname + "/" + "IAmHere.txt", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
 
app.get('/runandshowresults', function (req, res) {
    execfortran(res, (res) => {
        fs.readFile( __dirname + "/" + "IAmHere.txt", 'utf8', function (err, data) {
           console.log( data );
           res.end( data );
        });
    })
})
 
app.get('/runfortran', function (req, res) {
    exec("./HelloWorld", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.end( `error: ${error.message}` );
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.end( `error: ${stderr}` );
        }
        console.log(`stdout: ${stdout}`);
        res.end( `${stdout}` );
    });
})
 
app.get('/runls', function (req, res) {
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.end( `error: ${error.message}` );
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.end( `error: ${stderr}` );
        }
        console.log(`stdout: ${stdout}`);
        res.end( `${stdout}` );
 
        IAmHere.txt
    });
})
 
var server = app.listen(8090, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
