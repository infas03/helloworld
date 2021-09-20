const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

const Hello = require('./Router/helloRouter.js');

const app = express();

connectDB();

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
  }));

// Init Middleware
app.use(express.json({ extended: false }));

app.use( "/api/hello", Hello ); 

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));