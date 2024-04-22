const fs = require('fs');

// add data to a file
// fs.appendFile('myNewFile3.txt', '\nteks tambahan', (err) => {
//   if (err) throw err;
//   console.log('Updated');
// });

// replace data in a file
// fs.writeFile('myNewFile3.txt', 'the content is\nreplaced', (err) => {
//   if (err) throw err;
//   console.log('Replaced');
// });

// rename file
fs.rename('myNewFile1.txt', 'myrenamedfile.txt', (err) => {
  if (err) throw err;
  console.log('File renamed');
});