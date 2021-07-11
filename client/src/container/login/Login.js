import React from 'react'

const Login=()=>{
    const [userName, setUserName]= useState('')
    const [password, setPassword]= useState('')

    return(
        <div id='login'>    
            <form>
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

            </form>
        </div>
    )
}

export default Login