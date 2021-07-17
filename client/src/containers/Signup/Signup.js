import React, {useState} from 'react'
import Axios from 'axios'

const Signup=()=>{
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [age, setAge]=useState('')
    const [userNameReg, setUserNameReg]= useState('')
    const [passwordReg, setPasswordReg]= useState('')
    Axios.defaults.withCredentials=true
    const register=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:3001/register" , {
            firstName:firstName,
            lastName:lastName,
            age:age,
            userNameReg:userNameReg,
            passwordReg:passwordReg
        }).then((response)=>{
            console.log(response)
            return response
        }).catch(error => console.log(error));
    }

    return(
        <div id='form'>    
            <form onSubmit={register} action="http://localhost:3001/register" method="POST">
                <div>
                    <label>Firstname </label>
                    <input 
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Lastname </label>
                    <input 
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Age </label>
                    <input 
                        type='number'
                        id='age'
                        name='age'
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </div>
                <div>
                    <label>Username </label>
                    <input 
                        type='text'
                        id='userName'
                        name='userName'
                        value={userNameReg}
                        onChange={(event) => setUserNameReg(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password </label>
                    <input 
                        type='password'
                        id='password'
                        name='password'
                        value={passwordReg}
                        onChange={(event) => setPasswordReg(event.target.value)}
                    />
                </div>
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup