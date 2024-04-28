import {createConnection, escape} from 'mysql';

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

  // search for specific string
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", (err, result) => {
    if(err) throw err; 
    console.log(result);
  })

  // search for something including "S..." (% can be used anywhere)
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", (err, result) => {
    if(err) throw err; 
    console.log(result);
  })
  
  // escaping character in query
  const addr = "Mountain 21";
  con.query(`SELECT * FROM customers WHERE address = ${escape(addr)}`, (err, result) => {
    if(err) throw err; 
    console.log(result);
  })
  
  // passing variable to query
  const addr1 = "Mountain 21";
  con.query("SELECT * FROM customers WHERE address = ?", [addr1], (err, result) => {
    if(err) throw err; 
    console.log(result);
  })

  // passing multiple var to query
  const name = "Amy";
  const addr2 = "Mountain 21";
  const q = "SELECT * FROM customers WHERE name = ? OR address = ?" // "?" as placeholder
  con.query(q, [name, addr2], (err, result) => {
    if(err) throw err; 
    console.log(result);
  })

});