const express= require('express'); //install express
const mysql= require('mysql'); //install mysql

const app=express(); // start server

const db= mysql.createConnection({ //start db with default stuff
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB
})

app.post('/register', (res,req)=>{
    db.query("INSERT INTO account_info(first_name, last_name, age, userid, password) VALUES (?,?,?,?,?)", 
    [firstName,lastName, age, userName, password])
})
app.listen("3001", ()=>{
    console.log("Server started on port 3001");
})  //to specify the port