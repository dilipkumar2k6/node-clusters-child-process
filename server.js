const http = require('http');
const server = http.createServer();
const pid = process.pid;
server.on('request', (req, res) => {
  for (let i = 0; i < 1e9; i++) {
    // Simulate CPU work before responding
  }
  res.end(`Handled by process pid ${pid}`)

})
  .listen(8181, ()=>{
    console.log(`Server process started at pid ${pid}`)
  });