const express = require("express")
const products = require("./routes/products");
const path = require('path');

const app = express();

app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.use("/", products)