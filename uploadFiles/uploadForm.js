import http from 'http';
import fs from 'fs';
import {IncomingForm} from 'formidable';

http.createServer((req, res) => {
  if(req.url == '/fileupload') {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      const oldPath = files.filetoupload[0].filepath;
      const newPath = 'C:/Users/Faiz/Desktop/' + files.filetoupload[0].originalFilename;
      fs.rename(oldPath, newPath, (err) => {
        if(err) throw err;
        console.log('File uploaded and moved');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
          <h1>Congrats!</h1>
          <p>File ${files.filetoupload[0].originalFilename} has been saved to ${newPath}</p>
        `);
        res.end();
      });
      // console.log(typeof files);
      // console.log(files.filetoupload[0].filepath);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <h1>Upload Files</h1>
      <form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"><br>
        <input type="submit">
      </form>
    `);
    return res.end();
  }
}).listen(8080);