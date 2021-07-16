import React from 'react'
import './HomePage.css'
import logo from '/Users/arnavgoel/Documents/Projects/Project01-CarRental/client/src/assets/Logo.png'

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