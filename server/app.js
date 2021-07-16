const express= require('express'); //install express
const mysql= require('mysql'); //install mysql
const dotenv=require('dotenv'); //install dotenv
const cors=require('cors'); //install cors

const perm=require('./perm'); //get the perm middleware


const app=express(); // start server
app.use(cors({ credentials: true })) //setup cors
dotenv.config({path: './.env'}); //path for the env file
app.use(express.json()); //values are in json format  
app.use(perm)

const db=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PW,
    database:process.env.DB
})

db.connect((error) => { //to actually connect, if you have made any error above, will catch here
    if(error){
        console.log(error)
    }
    else{
        console.log("Connected to MYSQL")
    } 
})

app.use('/', require('./routes/auth'));


app.listen("3001", ()=>{
    console.log("Server started on port 3001");
})  //to specify the port