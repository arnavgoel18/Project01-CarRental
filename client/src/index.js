import React from 'react'
import ReactDOM from 'react-dom'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import HomePage from './containers/HomePage/HomePage'

function Page(){
    return (
        <>
            <Navbar />
            <HomePage/>
            <Footer />
        </>
    );
}

ReactDOM.render(<Page/>, document.getElementById('root'));
