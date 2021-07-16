import React, {useState} from 'react'
import Axios from 'axios'

const Login=()=>{
    const [userid, setUserid]= useState('')
    const [password, setPassword]= useState('')
    const [loginStatus, setLoginStatus]=useState('')

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
                setLoginStatus(response.data[0].userid)
            }
            console.log(response.data)
            return response
        }).catch(error => console.log(error));
    }

    return(
        <div id='form'>    
            <form onSubmit={login} action="http://localhost:3001/login" method="POST">
                <div>
                    <label>UserID </label>
                    <input 
                        type='text'
                        id='userid'
                        name='userid'
                        value={userid}
                        onChange={(event) => setUserid(event.target.value)}
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