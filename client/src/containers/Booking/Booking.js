import React, {useState} from 'react'
import {cars} from '../../components/BookCard/data'
import BookCard from '../../components/BookCard/BookCard.js'
import './Booking.css'

let filteredCars = cars;

function Booking() {
    //variables for all filters
    const [manufacturer, setManufacturer] = useState('');
    const [seats, setSeats] = useState('');
    const [carType, setCarType] = useState('');
    const [transmission, setTransmission] = useState('');

    /*Function to filter out cars*/
    {
    
        filteredCars = cars;

        //Manufacturer
        if(manufacturer && (manufacturer !== "Select Manufacturer")){
            filteredCars = filteredCars.filter((car) => car.companyName === manufacturer)
            console.log(filteredCars);
        }
        //Seats
        if(seats && (seats !== "Select Seats")){
            filteredCars = filteredCars.filter((car) => car.seats === seats)
            console.log(filteredCars);
        }

        //Car Type
        if(carType && (carType !== "Select Car Type")){
            filteredCars = filteredCars.filter((car) => car.carType === carType)
            console.log(filteredCars);
        }
        //Transmission
        if(transmission && (transmission !== "Select Transmission")){
            filteredCars = filteredCars.filter((car) => car.transmission === transmission)
            console.log(filteredCars);
        }
    }
    //funtction ends here


    //function to reset values
    function reset(){
        manufacturer.value = "Select Manufacturer";
        seats.value = "Select Seats";
        carType.value = "Select Car Type"
        transmission.value = "Select Transmission"
    }

    return (
        <div>
            <form name="form" className = "filters">
                {/* Manufacturer */}
                Manufacturer: 
                <select name="manufacturer" id="manufacturer" onChange={(e) => {setManufacturer(e.target.value)}} className="left">
                    <option value="Select Manufacturer">Select Manufacturer</option>    
                    <option value="Maruti">Maruti</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="Tata">Tata</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Mahindra">Mahindra</option>
                </select>
                <br/><br/>
                {/* Seats */}
                Seats:
                <select name="seats" id="seats" onChange={(e) => {setSeats(e.target.value)}} className="right">
                    <option value="Select Seats">Select Seats</option>
                    <option value = "5">5</option>
                    <option value = "7">7</option>
                </select><br/><br/>
                {/* Car Type (SUV, Sedan, Hatcback) */}
                Car Type: 
                <select name="carType" id="carType" onChange={(e) => {setCarType(e.target.value)}} className="left">
                    <option value="Select Car Type">Select Car Type</option>
                    <option value = "SUV">SUV</option>
                    <option value = "Sedan">Sedan</option>
                    <option value = "Hatchback">Hatchback</option>
                </select><br/><br/>
                {/* Transmission */}
                Transmission: 
                <select name="carType" id="carType" onChange={(e) => {setTransmission(e.target.value)}} className="right">
                    <option value="Select Transmission">Select Transmission</option>
                    <option value = "Manual">Manual</option>
                    <option value = "Automatic">Automatic</option>
                </select><br/><br/>

                <button onClick = {reset}>Reset</button>
            </form>

            {filteredCars.map((car) => {
                return (
                    <BookCard key={car.id} car = {car}/>
                )
            })}
        </div>
    )
}

export default Booking
