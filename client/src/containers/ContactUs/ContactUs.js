import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <div>
            <div class="contactus-heading">     {/*<!--Heading area-->*/}
                <h2>Contact us</h2>
                <p>Queries, Concerns, Doubts? We're here to listen! A-La-Car strives to offer the best possibilites
                    service to every contact. Our support team makes sure that you get the best advice and guidance
                    regarding whatever queries you have. 
                </p>
            </div>
            <div class="contactus-container">
                <div class="contactinfo"> {/*Contact Info*/}
                    <h2>Contact Info</h2>
                    <div class="info">
                        <div class="box">
                            <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div class="text">
                                <h3>Address</h3>
                                <p>address </p> {/*<!--Add details here-->*/}
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                            <div class="text">
                                <h3>Email</h3>
                                <p>something@gmail.com</p> {/*<!--Add details here-->*/}
                            </div>
                        </div>
                        <div class="box">
                            <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                            <div class="text">
                                <h3>Phone No</h3>
                                <p>1234567890 </p>  {/*<!--Add details here-->*/}
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="contactform">  {/*<!--Query form-->*/}
                    <h2>Send a query</h2>
                    <div class="formbox">
                        <div class="inputbox">
                            <input type="text" required/>
                            <span>Name</span>
                        </div>
                        <div class="inputbox">
                            <input type="email" required/>
                            <span>Email</span>
                        </div>
                        <div class="inputbox">
                            <input type="text" required/>
                            <span>City</span>
                        </div>
                        <div class="inputbox">
                            <input type="text" required/>
                            <span>Phone no</span>
                        </div>
                        <div class="tinputbox">
                            <textarea > </textarea>
                            <span>Ask your query</span>
                        </div>
                        <div class="sinputbox">
                            <input type="Submit" value="Send"/>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default ContactUs
