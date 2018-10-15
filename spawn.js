const {spawn} = require('child_process');

const child = spawn('find',['.','-type','f']); // returns child_process instance which implements node.js event emitter api

child.on('exit', (code, signal)=>{
  console.log(`child process exit with code ${code} for signal ${signal}`);
  // code is 0 if child process exit normally
  // signal is null if child process exit normally
})

child.stdout.on('data', (data)=>{
  console.log('child std out ', data.toString())
});

child.stderr.on('data', (data)=>{
  console.log('child std err ', data.toString())
});