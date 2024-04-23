import fs from 'fs';

// fire log on file open event
const rs = fs.createReadStream('./demofile.txt');
rs.on('open', () => {
  console.log('the file is open');
});