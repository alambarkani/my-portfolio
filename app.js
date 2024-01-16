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