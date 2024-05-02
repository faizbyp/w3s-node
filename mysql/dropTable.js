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
  // drop table
  con.query("DROP TABLE products", (err, result) => {
    if(err) throw err;
    console.log(`Result Object:\n${JSON.stringify(result)}`);
  })

  // drop table if exists (not returning error, but just warning)
  con.query("DROP TABLE IF EXISTS pets", (err, result) => {
    if(err) throw err;
    console.log(`Result Object:\n${JSON.stringify(result)}`);
  })
});