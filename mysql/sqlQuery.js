export const q = {
  createDb: "CREATE DATABASE mydb",
  // Don't forget to add database: "mydb" in createConnection
  createTable: "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))",
  alterTable: "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"
};