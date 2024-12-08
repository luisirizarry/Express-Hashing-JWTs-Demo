require("dotenv").config();
const { Client } = require("pg");

// Determine the database URI based on the environment
let DB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.DB_URI_TEST
    : process.env.DB_URI;

// Set up the database client
let db = new Client({
  connectionString: DB_URI,
});

db.connect()
  .then(() => {
    console.log(`Connected sucessfully to ${DB_URI}`);
  })
  .catch((err) => {
    console.error("Database connection error:", err.stack);
    process.exit(1);
  });

module.exports = db;