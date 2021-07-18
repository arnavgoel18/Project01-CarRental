const express= require('express'); //install express
const mysql= require('mysql'); //install mysql
const dotenv=require('dotenv'); //install dotenv
const cors=require('cors'); //install cors

const perm=require('./middlewares/perm'); //get the perm middleware

const app=express(); // start server
app.use(cors({  
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"] 
})) //setup cors
dotenv.config({path: './.env'}); //path for the env file
app.use(express.json()); //values are in json format  
app.use(perm)

app.use('/', require('./routes/auth'));
app.use('/', require('./routes/contactus'));

app.listen("3001", ()=>{
    console.log("Server started on port 3001");
})  //to specify the port