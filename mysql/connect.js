import {createConnection} from 'mysql';
import { q } from './sqlQuery.js';

const con = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_db"
});

con.connect((err) => {
  if(err) throw err;
  console.log('Connected');
  con.query('SELECT * FROM pets', (err, result) => {
    if(err) throw err;
    console.log(`Result: ${result}`);
  })
});