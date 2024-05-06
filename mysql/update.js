import { createConnection } from "mysql";

const con = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect((err) => {
  if(err) throw err;
  const q = "UPDATE customers SET name = 'Beti Kucing' WHERE id = '10'";
  con.query(q, (err, result) => {
    if(err) throw err;
    console.log(result.affectedRows + " records updated");
  })
});

// RESULT OBJECT
// {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 0,
//   serverStatus: 34,
//   warningCount: 0,
//   message: '(Rows matched: 1 Changed: 1 Warnings: 0',
//   protocol41: true,
//   changedRows: 1
// }