const fs = require('fs');

// add data in a file
// fs.appendFile('myNewFile1.txt', 'Hello Content', (err) => {
//   if (err) throw err;
//   console.log('Saved');
// });

// open file with an argument (w = write)
// fs.open('myNewFile2.txt', 'w', (err, file) => {
//   if (err) throw err;
//   console.log('Saved');
// });

// write file, replaced if exist
fs.writeFile('myNewFile3.txt', 'Hello content!', (err) => {
  if (err) throw err;
  console.log('Saved');
});