const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Middleware to serve static files
app.get('/',(req,res) => {
    
});

//Middleware to handle POST request
app.post('/save',(req,res) => {
    const {Name,Address,Comment,email} = req.body;

    //Create a database named comments.db
    

    console.log("Connected");
    //create sql statement for Name,Address,Comment,Email and save the data to database, give user to message data saved successfully
    
    db.close();
});

//Middleware to handle GET request and SeLeCT sql req
app.get('/get',(req,res) => {
    const db = new sqlite3.Database('./comments.db');
   
    db.close();
});

//start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});