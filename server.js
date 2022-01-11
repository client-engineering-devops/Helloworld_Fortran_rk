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

var writeinput = function(req, appres, cb) {

    fs.writeFileSync("HelloAgainInput.txt", Object.keys(req.query).length + "\n"); 
    console.log(Object.keys(req.query).length)
    for (const key in req.query) {
        console.log(req.query[key])
        fs.appendFileSync("HelloAgainInput.txt", req.query[key] + " "); 
    }

    cb (appres);
}


app.get('/processquery', function (req, res) {
    writeinput(req, res, function (res) {
    execfortran(res, (res) => {
        fs.readFile( __dirname + "/" + "IAmHere.txt", 'utf8', function (err, data) {
           console.log( data );
           res.end( data );
        });
    })
})});
    

app.get('/updateInput', function (req, res) {
    fs.writeFileSync("HelloAgainInput.txt", Object.keys(req.query).length + "\n"); 
    console.log(Object.keys(req.query).length)
    for (const key in req.query) {
        console.log(req.query[key])
        fs.appendFileSync("HelloAgainInput.txt", req.query[key] + " "); 
    }
    res.end(Object.keys(req.query).length.toString)
});

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

app.get('/runcobol', function (req, res) {
    exec("./myFirstCob", (error, stdout, stderr) => {
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

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

