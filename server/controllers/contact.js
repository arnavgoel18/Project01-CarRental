const mysql= require('mysql');

const db= mysql.createConnection({ //start db with default stuff
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB
}); 

exports.contactus=async(req,res)=>{
    const {name, email, city, phoneNo, query}=req.body

    db.query( db.query('INSERT INTO contact_us SET ?', {
        name:name,
        email:email,
        city:city,
        phoneNo:phoneNo,
        query:query
    },(error, results)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            return res.send({
                message: 'Query registered!'
            });
        }
    })
)}
