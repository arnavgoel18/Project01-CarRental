import React from 'react'
import ReactDOM from 'react-dom'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function Homepage(){
    return (
        <>
            <Navbar />
            <Footer />
        </>
    );
}

ReactDOM.render(<Homepage/>, document.getElementById('root'));