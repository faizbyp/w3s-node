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
  // delete record
  con.query("DELETE FROM customers WHERE name = 'Susan'", (err, result) => {
    if(err) throw err;
    console.log(`Result Object:\n${JSON.stringify(result)}`);
  })
});