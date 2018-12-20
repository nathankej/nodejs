const http =requrie('http');
const io  = require('socket.io');

let httpServer = http.createServer((req,res)=>{

});

httpServer.listen(8080);

io.listen(httpServer);


let aSock= [];
wsServer.on('connnection',sock=>{
  sock.on('msg',str=>{
    aSock.push(sock);
    sock.on('msg',str=>{
      aSock.forEach(s=>{
        if(s!=sock){
          s.emit('msg',str);
        }
      });
    })
  });
});
