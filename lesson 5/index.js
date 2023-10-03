//npm init
//npm i cors express body-parser
//npm i nodemon -D
const express = require('express');
const router = require('./router');
const parser = require('body-parser');
const cors = require('cors');
//create web server
const app = express();
//cors must be before router
app.use(cors());
app.use(parser.json());
//app.use(express.json());


app.use("/api", router)
const PORT = 8080;
//npx nodemon index.js
app.listen(PORT, () => {
    console.log("Server is running on http://127.0.0.1:8080")
});
