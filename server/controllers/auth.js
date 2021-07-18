const mysql= require('mysql');
const bcrypt= require('bcryptjs');
const jwt=require('jsonwebtoken') //install jwt


const db= mysql.createConnection({ //start db with default stuff
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB
});

//setting up the registering system
exports.register= async(req,res)=>{
    const {firstName, lastName, age, userNameReg, passwordReg}=req.body
    
    bcrypt.hash(passwordReg,10, (err,hash)=>{
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
                    return res.send({
                        message: 'User registered'
                    });
                }
            })
        }
    })
}

//setting up the login authentication
exports.login= (req,res)=>{
    const userid=req.body.userid
    const password=req.body.password

    db.query('SELECT * FROM account_info WHERE userid=?',[userid],
     async (error, result)=>{
        if(error){
            res.send({error:error})
        }
        else{
            if(result.length>0){
                await bcrypt.compare(password, result[0].password, (err, response)=>{   
                    if(response){
                        const accessToken=jwt.sign({userid:userid}, 'projectwork')
                        const cookieOptions={
                            expires: new Date(Date.now()+24*60*60*1000),
                            httpOnly: true
                        }        
                        res.cookie('jwt', accessToken, cookieOptions);
                        res.send(accessToken)
                        //res.send(result)
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
}