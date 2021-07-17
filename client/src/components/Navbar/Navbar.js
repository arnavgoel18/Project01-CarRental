import React from 'react'
import './Navbar.css'
import hamburger from '/Users/arnavgoel/Documents/Projects/Project01-CarRental/client/src/assets/hamburger-menu.png'
import logo from '/Users/arnavgoel/Documents/Projects/Project01-CarRental/client/src/assets/Logo.png'

function Navbar() {
    //Funtion for Toggling Menu Bar in Mobile View
    function toggleFunction() {
        const expandedNav = document.getElementById('navbar');
        const toggleButton = document.getElementById("toggleButton");
        
        if(expandedNav.style.display === "none"){
            expandedNav.style.display = "inline-flex";
        }
        else {
            expandedNav.style.display = "none";
        }
    }    
    //END - Funtion for Toggling Menu Bar in Mobile View

    return (
        <div>
            <div className="header">
                <div className="left">
                    <img className="nav-logo" src={logo} alt = "logo"/>
                    <span className="">A La Carte</span>
                </div>
                <nav >
                    <ul id="navbar">
                        <li>Our Cars</li>
                        <li>Book</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li><button>Login/SignUp</button></li>
                    </ul>
                    <img src={hamburger} id = "toggleButton" onClick = {toggleFunction} alt = "salsa"/>
                </nav>
            </div>  
        </div>
    )
}

export default Navbar
