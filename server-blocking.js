const http = require('http');

const server = http.createServer();
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e13; i++) {
    sum = sum + i;
  }
  return sum;
};

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const sum = longComputation();
    return res.end(`Total sum ${sum}`);
  } else {
    res.end('Ok')
  }
});

server.listen(8181);