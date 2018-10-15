const http = require('http');
const {fork} = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('compute.js')
    compute.send('start');
    compute.on('message', data =>{
      res.end(`Total sum ${data}`)
    });
  } else {
    res.end('Ok')
  }
});

server.listen(8181);