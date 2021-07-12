import React, {useState} from 'react'
import Axios from 'axios'

const Login=()=>{
    const [userName, setUserName]= useState('')
    const [password, setPassword]= useState('')
    const [loginStatus, setLoginStatus]=useState('')

    const login=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/login', {
            userName:userName,
            password:password
        }).then((response)=>{
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
                setLoginStatus(response.data[0].userName)
            }
            console.log(response.data)
            return response
        })
    }

    return(
        <div id='form'>    
            <form onSubmit={login} action="http://localhost:3001/login" method="POST">
                <div>
                    <label>Username </label>
                    <input 
                        type='text'
                        id='userName'
                        name='userName'
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password </label>
                    <input 
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type='submit'>submit</button>
            </form>
            <h1>{loginStatus}</h1>
        </div>
    )
}

export default Login