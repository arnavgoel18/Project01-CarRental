import React from 'react'

const Login=()=>{
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [age, setAge]=useState('')
    const [userNameReg, setUserNameReg]= useState('')
    const [passwordReg, setPasswordReg]= useState('')

    return(
        <div id='login'>    
            <form>
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

            </form>
        </div>
    )
}

export default Login