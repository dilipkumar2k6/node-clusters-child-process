const { exec } = require('child_process');

exec('find . -type f | wc -l ', (err, stdout, stderr) => {

  if (err) {
    console.error(`Error occurred `, stderr);
    return;
  }
  console.log(`Number of files ${stdout}`)
});