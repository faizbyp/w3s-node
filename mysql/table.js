import {createConnection} from 'mysql';
import { q } from './sqlQuery.js';

// create connection to host
const con = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect((err) => {
  if(err) throw err;
  console.log('Connected');
  // create table
  con.query(q.createTable, (err, result) => {
    if(err) throw err;
    console.log(`Result: ${result}`);
  })
});