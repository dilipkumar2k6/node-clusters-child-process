const {spawn} = require('child_process');

const child = spawn('node', ['timer.js'],{
  detached: true,
  stdid: 'ignore'
});