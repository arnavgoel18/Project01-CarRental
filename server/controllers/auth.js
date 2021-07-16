const mysql= require('mysql');
const bcrypt= require('bcryptjs');


const db= mysql.createConnection({ //start db with default stuff
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB
});

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
                        res.send(result)
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