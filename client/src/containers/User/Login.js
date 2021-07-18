import React, {useState} from 'react'
import './Style.css'
import Axios from 'axios'

const Login=()=>{
    const [userid, setUserid]= useState('')
    const [password, setPassword]= useState('')
    const [loginStatus, setLoginStatus]=useState('')

    Axios.defaults.withCredentials=true

    const login=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/login', {
            userid:userid,
            password:password
        }).then((response)=>{
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
                sessionStorage.setItem("accessToken", response.data)
                setLoginStatus(response.data[0].userid)
            }
            console.log(response.data)
            return response
        }).catch(error => console.log(error));
        setUserid('')
        setPassword('')
    }

    return(
        <div className='form'>    
            <form className='form-login' onSubmit={login} action="http://localhost:3001/login" method="POST">
                    <div className='input-block'>
                        <label>UserID </label>
                        <input 
                            type='text'
                            placeholder='Enter username'
                            id='userid'
                            name='userid'
                            value={userid}
                            onChange={(event) => setUserid(event.target.value)}
                        />
                    </div>
                    <div className='input-block'>
                        <label>Password </label>
                        <input 
                            type='password'
                            placeholder='Enter password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                <button type='submit' className='btn-login'>Log In</button>
            </form>
            <h1>{loginStatus}</h1>
        </div>
    )
}

export default Login