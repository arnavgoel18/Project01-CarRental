import React, {useState} from 'react'
import Axios from 'axios'
import './ContactUs.css'

const ContactUs=()=> {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [city, setCity]=useState('')
    const [phoneNo, setPhoneNo]= useState('')
    const [query, setQuery]= useState('')

    Axios.defaults.withCredentials=true
    const contact=(e)=>{
        e.preventDefault();
        Axios.post("http://localhost:3001/contactus" , {
            name:name,
            email:email,
            city:city,
            phoneNo:phoneNo,
            query:query
        }).then((response)=>{
            console.log(response)
            return response
        }).catch(error => console.log(error));
        setName('')
        setEmail('')
        setCity('')
        setPhoneNo('')
        setQuery('')
    }

    return (
        <div>
            <div className="contactus-heading">     {/*<!--Heading area-->*/}
                <h2>Contact us</h2>
                <p>Queries, Concerns, Doubts? We're here to listen! A-La-Car strives to offer the best possibilites
                    service to every contact. Our support team makes sure that you get the best advice and guidance
                    regarding whatever queries you have. 
                </p>
            </div>
            <div className="contactus-container">
                <div className="contactinfo"> {/*Contact Info*/}
                    <h2>Contact Info</h2>
                    <div className="info">
                        <div className="box">
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>address </p> {/*<!--Add details here-->*/}
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>something@gmail.com</p> {/*<!--Add details here-->*/}
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Phone No</h3>
                                <p>1234567890 </p>  {/*<!--Add details here-->*/}
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="contactform">  {/*<!--Query form-->*/}
                    <h2>Send a query</h2>
                    <form onSubmit={contact} action="http://localhost:3001/contactus" method="POST">
                    <div className="formbox">
                        <div className="inputbox">
                            <input 
                                type='text'
                                id='name'
                                name='name'
                                value={name}
                                onChange={(event) => setName(event.target.value)} required/>
                            <span>Name</span>
                        </div>
                        <div className="inputbox">
                            <input 
                                type='text'
                                id='email'
                                name='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}required/>
                            <span>Email</span>
                        </div>
                        <div className="inputbox">
                            <input 
                                type='text'
                                id='city'
                                name='city'
                                value={city}
                                onChange={(event) => setCity(event.target.value)} required/>
                            <span>City</span>
                        </div>
                        <div className="inputbox">
                            <input 
                                type='text'
                                id='phoneNo'
                                name='phoneNo'
                                value={phoneNo}
                                onChange={(event) => setPhoneNo(event.target.value)} required/>
                            <span>Phone no</span>
                        </div>
                        <div className="tinputbox">
                            <textarea 
                                id='query'
                                name='query'
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}> </textarea>
                            <span>Ask your query</span>
                        </div>
                        <div className="sinputbox">
                            <button type="Submit">Send</button>
                        </div>
                    </div>
                    </form>
                </div>   
            </div>
        </div>
    );
}

export default ContactUs
