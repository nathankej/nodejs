// var stuff = require('./stuff');
//
// console.log(stuff.counter(['alex','jack','ricky']));
//
// console.log(stuff.adder(5,6));
//
//
// console.log(stuff.adder(stuff.pi,5));
// var events =require('events');
// var util =require('util');
//
// var Person = function(name){
//   this.name = name;
// };
//
// util.inherits(Person,events.EventEmitter);
//
// var james = new Person('james');
// var mary = new Person('mary');
// var ryu =  new Person('ryu');
// var people = [james,mary,ryu];
//
// people.forEach(function(person){
//   person.on('speak',function(mssg){
//     console.log(person.name + ' said: ' + mssg);
//   });
// });
//
// james.emit('speak','hey dudes');
// ryu.emit('speak','I want a curry');

//var fs = require('fs');

//var readMe = fs.readFileSync('readme.txt','utf8');
//console.log(readMe);
// fs.readFile('readMe.txt','utf8',function(err,data){
//   fs.writeFile('writeYou.txt', data,function(err,data){});
//   //console.log(data);
// });
//fs.writeFileSync('writeMe.txt',readMe);

// fs.unlink('writeME.txt',(err)=>{
//   if(err) throw err;
// });

//fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');
//
// fs.mkdir('stuff',function(){
//   fs.readFile('readMe.txt','utf8',function(err,data){
//     fs.writeFile('./stuff/writeMe.txt',data,(err)=>{
//       if (err) throw err;
//     });
//   });
// })

//11 clinet server

// var http = require('http');
//
// var server = http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type': 'text/plain'});
//   res.end('Hey Ninjas');
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('yo dawgs,now listen to port 3000');

//13 stream and buffers
// var http =require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req,res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200,{'Content-Type': 'text/plain'});
//   var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
//   var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//   myReadStream.pipe(myWriteStream);
//   res.end('Hey Ninjas');
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('yo dawgs,now listen to port 3000');


// myReadStream.on('data',function(chunk){
//   console.log('new chunk received');
//   myWriteStream.write(chunk);
// });
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.engine('ejs',require('ejs').renderFile);
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));


app.get('/',function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  //console.log(req.query);
  res.render('contact',{qs:req.query});
});

app.post('/contact',urlencodedParser,function(req,res){
  console.log(req.body);
  res.render('contact-success',{data:req.body});
});

app.get('/profile/:name',function(req,res){
  var data = {age:29,job:'ninja',hobbies:['eating','fighting','travelling']}
  res.render('profile',{person:req.params.name,data:data});
});

app.listen(3000);
