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
  // select
  con.query("SELECT name, address FROM customers", (err, result, fields) => {
    if(err) throw err;
    console.log(`Result: ${JSON.stringify(result)}`); // console.log(result);
    console.log("\n");
    console.log(result[0].address);
    console.log("\n");
    console.log(fields);
    console.log("\n");
    console.log(fields[1].name);
  })
});