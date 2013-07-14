var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var contents = fs.readFile('index.html','utf8',function(err,data){
	if(err){
	    response.send('unable to laod the requested file');
	}
	else{
	    response.writeHead(200,{'Content-Type': 'text/html'});
	    response.write(data);
	    }
response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
