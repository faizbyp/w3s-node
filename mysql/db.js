import {createConnection} from 'mysql';
import { q } from './sqlQuery.js';

// create connection to host
const con = createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect((err) => {
  if(err) throw err;
  console.log('Connected');
  // create db
  con.query(q.createDb, (err, result) => {
    if(err) throw err;
    console.log(`Result: ${result}`);
  })
});