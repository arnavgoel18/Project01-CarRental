import React from 'react'
import './HomePage.css'
import logo from '../../assets/Logo.png'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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