import React, {useState, useEffect} from 'react'
import { AuthContext } from "../../helpers/AuthContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import './Navbar.css'
import hamburger from '../../assets/hamburger-menu.png'
import logo from '../../assets/Logo.png'
import axios from 'axios';

import Home from '../../containers/HomePage/HomePage'
import Book from '../../containers/HomePage/HomePage'
import User from '../../containers/User/Login'
import About from '../../containers/AboutUs/AboutUs'
import Contact from '../../containers/ContactUs/ContactUs'


function Navbar() {
    //Funtion for Toggling Menu Bar in Mobile View
    function toggleFunction() {
        const expandedNav = document.getElementById('navbar');
        const toggleButton = document.getElementById("toggleButton");
        
        if(expandedNav.style.display === "none"){
            expandedNav.style.display = "inline-flex";
        }
        else {
            expandedNav.style.display = "none";
        }
    }    
    //END - Funtion for Toggling Menu Bar in Mobile View

    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        status: false,
      });

    useEffect(() => {
        axios
          .get("http://localhost:3001/auth/auth", {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              setAuthState({ ...authState, status: false });
            } else {
              setAuthState({
                username: response.data.username,
                id: response.data.id,
                status: true,
              });
            }
          });
    }, []);
    
    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
    };

    return (
        <div>
            <div className="header">
                <div className="left">
                    <img className="nav-logo" src={logo} alt = "logo"/>
                    <span className="">A La Carte</span>
                </div>
                <AuthContext.Provider value={{ authState, setAuthState }}>
                    <Router>
                        <nav >
                            <ul id="navbar">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/book'>Book a car</Link></li>
                                <li><Link to='/contactus'>Contact Us</Link></li>
                                <li><Link to='/aboutus'>About Us</Link></li>
                                {!authState.status && (
                                    <>
                                    <li><Link to="/user"> Login/Signup</Link></li>
                                    </>
                                )}
                                <div className="loggedInContainer">
                                <h1>{authState.username} </h1>
                                {authState.status && <button onClick={logout}> Logout</button>}
                                </div>
                            </ul>
                            <img src={hamburger} id = "toggleButton" onClick = {toggleFunction} alt = "salsa"/>
                        </nav>
                        <Switch>
                            <Route path="/home" exact component={Home} />
                            <Route path="/book" exact component={Book} />
                            <Route path="/contactus" exact component={Contact} />
                            <Route path="/aboutus" exact component={About} />
                            <Route path="/user" exact component={User} />
                        </Switch>
                    </Router>
                </AuthContext.Provider>
            </div>  
        </div>
    )
}

export default Navbar
