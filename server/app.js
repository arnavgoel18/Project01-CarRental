const express= require('express'); //install express
const mysql= require('mysql'); //install mysql
const dotenv=require('dotenv') //install dotenv
const cors=require('cors')

const app=express(); // start server
dotenv.config({path: './.env'}); //path for the env file
app.use(express.json()); //values are in json format 
app.use(cors())

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
app.post('/register', (req,res)=>{
    const {firstName, lastName, age, userNameReg, passwordReg}=req.body
    db.query('INSERT INTO account_info SET ?', {
        first_name: firstName, 
        last_name:lastName, 
        age:age,
        userid: userNameReg, 
        password: passwordReg
    }, (error, results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            return res.render('register', {
                message: 'User registered'
            });
        }
    })
})

app.post('/login', (req,res)=>{
    const {userName, password}=req.body

    db.query('SELECT * FROM account_info WHERE userid=?'),[userName],
     (error, results)=>{
        if(error){
            res.send({error:error})
        }
        else{
            if(results.length>0){
                res.send(results)
            }
            else{
                res.send({message: 'wrong'})
            }

            }
        }
    })

app.listen("3001", ()=>{
    console.log("Server started on port 3001");
})  //to specify the port