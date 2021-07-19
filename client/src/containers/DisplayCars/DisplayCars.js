import React, {useContext} from 'react'
import BookCard from '../../components/BookCard/BookCard.js'
import {cars} from '../../components/BookCard/data'
import './DisplayCars.css'
import NavBar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'
import Booking from '../Booking/Booking.js'

import User from '../../containers/User/Index'
import { AuthContext } from "../../helpers/AuthContext";

function DisplayCars() {
    const authState  = useContext(AuthContext);
    // if(!authState.status){
    //     return (
    //         <>
    //             <NavBar/>
    //             <h2>Please login first to continue</h2>
    //             <User/>
    //         </>
    //     )
    // }
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
//ARNAV FEEL FREE TO COMMENT OUT THE IF ELSE PART, ITS STILL NOT FUNCTIONING PERFECTLY RN