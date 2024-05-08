import { createConnection } from "mysql";

const con = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect((err) => {
  if(err) throw err;
  const q = "SELECT * FROM customers LIMIT 7 OFFSET 3"; // bisa juga pake LIMIT 3, 7
  // offset berarti longkap brp
  con.query(q, (err, res) => {
    if(err) throw err;
    console.log(res);
  })
})