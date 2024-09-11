const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);// localhost:5000/books



mongoose.connect("mongodb+srv://admin:NftsJYrNi4jcn0d2@cluster0.jfmkw.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>console.log("Connected To Database"))
.then(() =>{
   app.listen(5000);
}).catch((err)=>console.log(err));

//NftsJYrNi4jcn0d2