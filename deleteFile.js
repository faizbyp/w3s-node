const fs = require('fs');

// delete file
fs.unlink('myNewFile2.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});