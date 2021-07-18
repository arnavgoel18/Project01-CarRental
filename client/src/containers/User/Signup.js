import React, {useState} from 'react'
import './Style.css'
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
        setFirstName('')
        setLastName('')
        setAge('')
        setUserNameReg('')
        setPasswordReg('')
    }

    return(
        <div className='form'>    
            <form className='form-signup' onSubmit={register} action="http://localhost:3001/register" method="POST">
                    <div className='input-block'>
                        <label>Firstname </label>
                        <input 
                            type='text'
                            placeholder='Enter firstname'
                            id='firstName'
                            name='firstName'
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div className='input-block'>
                        <label>Lastname </label>
                        <input 
                            type='text'
                            placeholder='Enter lastname'
                            id='lastName'
                            name='lastName'
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <div className='input-block'>
                        <label>Age </label>
                        <input 
                            type='number'
                            placeholder='Enter age'
                            id='age'
                            name='age'
                            value={age}
                            onChange={(event) => setAge(event.target.value)}
                        />
                    </div>
                    <div className='input-block'>
                        <label>Username </label>
                        <input 
                            type='text'
                            placeholder='Enter username'
                            id='userName'
                            name='userName'
                            value={userNameReg}
                            onChange={(event) => setUserNameReg(event.target.value)}
                        />
                    </div>
                    <div className='input-block'>
                        <label>Password </label>
                        <input 
                            type='password'
                            placeholder='Enter password'
                            id='password'
                            name='password'
                            value={passwordReg}
                            onChange={(event) => setPasswordReg(event.target.value)}
                        />
                    </div>
                <button type='submit' className='btn-signup'>Signup</button>
            </form>
        </div>
    )
}

export default Signup