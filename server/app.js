const express= require('express'); //install express
const mysql= require('mysql'); //install mysql
const dotenv=require('dotenv'); //install dotenv
const cors=require('cors'); //install cors
const bcrypt=require('bcryptjs')//install bcrypt

const perm=require('./perm'); //get the perm middleware

const saltRounds=10

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
app.post('/register', (req,res)=>{
    const {firstName, lastName, age, userNameReg, passwordReg}=req.body

    bcrypt.hash(passwordReg,saltRounds, (err,hash)=>{
        if(err){
            console.log(err)
        }
        else{
            db.query('INSERT INTO account_info SET ?', {
                first_name: firstName, 
                last_name:lastName, 
                age:age,
                userid: userNameReg, 
                password: hash
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
        }
    })
})

app.post('/login', (req,res)=>{
    const userid=req.body.userid
    const password=req.body.password

    if(!userid || !password){
        return res.status(400).render('login', {
            message: 'Please provide the details'
        })
    }
    
    db.query('SELECT * FROM account_info WHERE userid=?',[userid],
     async (error, results)=>{
        if(error){
            res.send({error:error})
        }
        else{
            if(results.length>0){
                bcrypt.compare(password, result[0].password, (err, response)=>{
                    if(response){
                        res.send(results)
                    }
                    else{
                        res.send({message: 'Wrong credentials'})
                    }
                })
            }
            else{
                res.send({message: 'User does not exist'})
            }
            }
        })
    })

app.listen("3001", ()=>{
    console.log("Server started on port 3001");
})  //to specify the port