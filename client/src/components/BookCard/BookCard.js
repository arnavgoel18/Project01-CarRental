import React from 'react'

import './BookCard.css'

import pic from '../../assets/Scorpio.png'

// icons imports
import { MdAirlineSeatReclineExtra, MdAllInclusive, MdPersonAdd } from 'react-icons/md'
import { FaTachometerAlt, FaGasPump, FaCar } from 'react-icons/fa'
import { GiJoystick } from 'react-icons/gi'
import { VscSymbolColor } from 'react-icons/vsc'
import { BiRupee} from 'react-icons/bi'

//data import
// import {data} from './data.js'

const car = {
    modelName: 'Mahindra Scorpio',
    carColor: 'Red',
    seats: 7,
    mileage: 25,
    gasCharges: true,
    fuel: 'Diesel',
    carType: 'SUV',
    transmission: 'Automatic',
    minAge: 18,
    pic: "../../assets/Scorpio.png",
    pricePerDay: 5000
}

function SendCard(){
    return (
        <BookCard car = {car}/>
    )
}

function BookCard(props) {
    //destructing props
    // const {modelName, carColor, seats, mileage, gasCharges, fuel, carType, transmission, minAge, pic, pricePerDay} = car;
    
    const {} = car;

     return (
        <React.Fragment>
            <div className="bookCard-container">
                <div className="col1">
                    <img src={pic} alt="Car Picture"/>
                    <ul>
                        <li id="color-model">{car.modelName}</li>
                    </ul>
                </div>
                <div className="col2 cols">
                    <ul>
                        <li><MdAirlineSeatReclineExtra/> {car.seats} Seater</li>
                        <li><FaTachometerAlt/> {car.mileage} km/L</li>
                        <li><MdAllInclusive/> {(car.gasCharges) ? 'Gas Charges Inc.' : 'Gas Not Included'}</li>
                        <li><FaGasPump/> {car.fuel}</li>
                    </ul>
                </div>
                <div className="col3 cols">
                    <ul>
                        <li><FaCar/> {car.carType}</li>
                        <li><GiJoystick/> {car.transmission} </li>
                        <li><VscSymbolColor/> {car.carColor}</li>
                        <li><MdPersonAdd/> {car.minAge}+ </li>
                    </ul>
                </div>
                <div className="col4 cols">
                    <ul>
                        <li><BiRupee/>{car.pricePerDay} / Day </li>
                        <li> <button className="btn">Book Now</button> </li>
                        <li className="terms-and-cond"> <a href="">T&C</a> </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SendCard
