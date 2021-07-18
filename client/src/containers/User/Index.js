import React, {useState} from 'react'
import Login from './Login'
import Signup from './Signup'
import './Style.css'

const Index=()=>{
    const [show, setShow]=useState(false)
    const changeForm=()=>{
        setShow(!show)
    }
    return(
        <div className='forms'>
            <div className='btns'>
                <button type="button" class="switch" onClick={changeForm} 
                style={{backgroundColor:show?'burlywood':'rgba(255,255,255,0.5)'}}>
                    Login<span class="underline"></span>
                </button>
                <button type="button" class="switch" onClick={changeForm}
                style={{backgroundColor:show?'rgba(255,255,255,0.5)':'burlywood'}}>
                    Signup<span class="underline"></span>
                </button>
            </div>
            <div className='formWrapper'>
            {   show && <Login />}{show || <Signup />}
            </div>
        </div>
    )
}

export default Index