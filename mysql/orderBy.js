import {createConnection} from 'mysql';

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
  // select order by
  con.query("SELECT * from customers ORDER BY name", (err, result) => {
    if(err) throw err;
    console.log(`Result Ascending:\n${JSON.stringify(result)}`);
  })
  con.query("SELECT * from customers ORDER BY name+0 DESC", (err, result) => {
    if(err) throw err;
    console.log(`Result Descending:\n${JSON.stringify(result)}`);
  })
});