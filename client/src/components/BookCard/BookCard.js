import React from 'react'

import './BookCard.css'

import pic from '../../assets/Scorpio.png'

// icons imports
import { MdAirlineSeatReclineExtra, MdAllInclusive, MdPersonAdd } from 'react-icons/md'
import { FaTachometerAlt, FaGasPump, FaCar } from 'react-icons/fa'
import { GiJoystick } from 'react-icons/gi'
import { VscSymbolColor } from 'react-icons/vsc'

//data import
import {data} from './data.js'

function BookCard() {
    return (
        <React.Fragment>
            <div className="bookCard-container">
                <div className="col1">
                    <img src={pic} alt="Car Picture"/>
                    <ul>
                        <li id="color-model">{data.modelName}</li>
                    </ul>
                </div>
                <div className="col2 cols">
                    <ul>
                        <li><MdAirlineSeatReclineExtra/> 5 Seater</li>
                        <li><FaTachometerAlt/> 25 km/L</li>
                        <li><MdAllInclusive/> Gas Charges Inc.</li>
                        <li><FaGasPump/> Diesel</li>
                    </ul>
                </div>
                <div className="col3 cols">
                    <ul>
                        <li><FaCar/> Sedan</li>
                        <li><GiJoystick/> Automatic </li>
                        <li><VscSymbolColor/> Red</li>
                        <li><MdPersonAdd/> 18+</li>
                    </ul>
                </div>
                <div className="col4 cols">
                    <ul>
                        <li> $5000 / Day </li>
                        <li> <button className="btn">Book Now</button> </li>
                        <li className="terms-and-cond"> <a href="">T&C</a> </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BookCard
