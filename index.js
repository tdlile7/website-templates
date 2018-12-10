const express = require("express");
const app     = express();
const port    = process.env.PORT ||3000;

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req,res) => res.render("index"));

app.get('/template',(req,res) => res.render("template-1"));

app.listen(port, () => console.log("Templates are ready to be shared!"));
