const express = require('express');
const conectarDB = require('./config/db');
const app = express();
const cors = require("cors");

//connect to DB 

conectarDB();

app.use(express.json());
app.use(cors());

app.use('/api/productos', require('./routes/producto'));


app.listen(4000,() => {


    console.log('The server is listening on port 4000')

});