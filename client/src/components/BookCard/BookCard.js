import React from 'react'

import './BookCard.css'

// import pic from '../../assets/Scorpio.png'

// icons imports
import { MdAirlineSeatReclineExtra, MdAllInclusive, MdPersonAdd } from 'react-icons/md'
import { FaTachometerAlt, FaGasPump, FaCar } from 'react-icons/fa'
import { GiJoystick } from 'react-icons/gi'
import { VscSymbolColor } from 'react-icons/vsc'
import { BiRupee} from 'react-icons/bi'

//data import
//import an arrray here with all the possible cars returned here.
import {cars} from './data.js'

function possibleCars(){
    return (
        {}
    )
}

function BookCard(props) {    
     return (
        <React.Fragment>
            <div className="bookCard-container">
                <div className="col1">
                    <img src={ require('../../assets/Scorpio.png').default } alt="Car Picture"/>
                    <ul>
                        <li id="color-model">{cars.modelName}</li>
                    </ul>
                </div>
                <div className="col2 cols">
                    <ul>
                        <li><MdAirlineSeatReclineExtra/> {cars.seats} Seater</li>
                        <li><FaTachometerAlt/> {cars.mileage} km/L</li>
                        <li><MdAllInclusive/> {(cars.gasCharges) ? 'Gas Charges Inc.' : 'Gas Not Included'}</li>
                        <li><FaGasPump/> {cars.fuel}</li>
                    </ul>
                </div>
                <div className="col3 cols">
                    <ul>
                        <li><FaCar/> {cars.carType}</li>
                        <li><GiJoystick/> {cars.transmission} </li>
                        <li><VscSymbolColor/> {cars.carColor}</li>
                        <li><MdPersonAdd/> {cars.minAge}+ </li>
                    </ul>
                </div>
                <div className="col4 cols">
                    <ul>
                        <li><BiRupee/>{cars.pricePerDay} / Day </li>
                        <li> <button className="btn">Book Now</button> </li>
                        <li className="terms-and-cond"> <a href="">T&C</a> </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BookCard
