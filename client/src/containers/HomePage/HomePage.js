import React from 'react'
import './HomePage.css'
import logo from '../../assets/Logo.png'

function HomePage(){
    return(
    <>
        <div id="main">
            <img src={logo} alt=""/>
            <span>A - La - Car</span>
            <button>Book Now</button>
        </div>
    </>
    );
}

export default HomePage