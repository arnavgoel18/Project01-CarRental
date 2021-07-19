import React from 'react'
import BookCard from '../../components/BookCard/BookCard.js'
import {cars} from '../../components/BookCard/data'
import './DisplayCars.css'
import NavBar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'
import Booking from '../Booking/Booking.js'


function DisplayCars() {
    return (
        <React.Fragment>
            <NavBar/>
            <div className = 'bookCard-container-container'>
                <Booking></Booking>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default DisplayCars
