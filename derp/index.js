var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello ya scrublords, this is a thing a ma jig.');
});

app.get('/speak/:animal', function(req, res){
	var animal = req.params.animal;
	var noise = { pig: "oink", cow: "moo", dog: "meow"};
	res.send("the "+animal+"says '"+noise[animal]+"'");
});

app.get('/repeat/:word/:num', function(req, res){
	var word = req.params.word;
	var num = +req.params.num;
	var str = word;
	while(--num){
		str += " " + word;
	}	 
	res.send(str);
});

app.listen(3000, function(){
	console.log('listening on port 3000');
});
