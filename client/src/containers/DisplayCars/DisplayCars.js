import React from 'react'
import BookCard from '../../components/BookCard/BookCard.js'
import {cars} from '../../components/BookCard/data'
import './DisplayCars.css'
import NavBar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'


function DisplayCars() {
    return (
        <React.Fragment>
            <NavBar/>
            <div className = 'bookCard-container-container'>
                {cars.map((car) => {
                    return (
                        <BookCard key={car.id} car = {car}/>
                    )
                })}
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default DisplayCars
