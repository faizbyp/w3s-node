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
});