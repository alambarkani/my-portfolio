import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";
import { dirname } from "path";
import homeRouter from "./routes/homeRouter.js"
import profileRouter from "./routes/profileRouter.js";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(expressEjsLayouts);

app.set("view engine", "ejs")
app.set("views", __dirname + '/views/')

app.use(express.static('public'))

app.use(homeRouter.index)
app.use('/profile', profileRouter.cv)

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
})

//create connection to postgresql database
/* const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
}); */

//create consuming external api
/* const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  }); */
