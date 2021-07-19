import React from 'react'

import './BookCard.css'

// icons imports
import { MdAirlineSeatReclineExtra, MdAllInclusive, MdPersonAdd } from 'react-icons/md'
import { FaTachometerAlt, FaGasPump, FaCar } from 'react-icons/fa'
import { GiJoystick } from 'react-icons/gi'
import { VscSymbolColor } from 'react-icons/vsc'
import { BiRupee} from 'react-icons/bi'

function BookCard(props) {    
    const {id, companyName, modelName, carColor, seats, mileage, gasCharges, fuel, carType, transmission, minAge, picture, pricePerDay} = props.car;
    
    return (
        <React.Fragment>
            <div className="bookCard-container"  id={id}>
                <div className="col1">
                    <img src={picture} alt={modelName}/>
                    <ul>
                        <li id="color-model">{companyName} {modelName}</li>
                    </ul>
                </div>
                <div className="col2 cols">
                    <ul>
                        <li><MdAirlineSeatReclineExtra/> {seats} Seater</li>
                        <li><FaTachometerAlt/> {mileage} km/L</li>
                        <li><MdAllInclusive/> {(gasCharges) ? 'Gas Charges Inc.' : 'Gas Not Included'}</li>
                        <li><FaGasPump/> {fuel}</li>
                    </ul>
                </div>
                <div className="col3 cols">
                    <ul>
                        <li><FaCar/> {carType}</li>
                        <li><GiJoystick/> {transmission} </li>
                        <li><VscSymbolColor/> {carColor}</li>
                        <li><MdPersonAdd/> {minAge}+ </li>
                    </ul>
                </div>
                <div className="col4 cols">
                    <ul>
                        <li><BiRupee/>{pricePerDay} / Day </li>
                        <li> <button className="btn">Book Now</button> </li>
                        <li className="terms-and-cond"> <a href="https://www.zoomcar.com/zap-policies" target="_blank" rel="noreferrer">T&C</a> </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BookCard
