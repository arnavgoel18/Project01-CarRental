import React from 'react'
import './Footer.css'
import { BiCopyright} from 'react-icons/bi'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import DeveloperLinks from './DeveloperLinks'

function Footer(){
    return (
    <>
        <div className="footer">
            <div className="row1">  
                <div className="col1">
                    <ul className="pages">
                        <li><i className="fa fa-shopping-cart" aria-hidden="true"></i> Our cars</li>
                        <li><i className="fa fa-bookmark" aria-hidden="true"></i> Booking Page</li>
                        <li><i className="fa fa-phone-square" aria-hidden="true"></i> Contact Us</li>
                        <li><i className="fa fa-info-circle" aria-hidden="true"></i> Know More</li>
                        <li><i className="fa fa-sign-in" aria-hidden="true"></i> Login/Sign Up</li>
                    </ul>
                </div>
                <div className="col2">
                    <DeveloperLinks/>    
                </div>  {/*<!--ENd Footer Col2-->*/}
                <div className="col3"></div>
            </div>
        </div>
        <div className="copyright">  {/*<!--Row 2-->*/}
            <span className="copy">
                <BiCopyright/> A-La-Cart November 2020
            </span>
            <span className="social">
                <a href=""><FiFacebook/></a>  
                <a href=""><FiInstagram/></a>   
            </span>
        </div>
    </>
    );
}

export default Footer