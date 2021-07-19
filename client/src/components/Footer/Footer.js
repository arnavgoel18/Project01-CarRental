import React from 'react'
import './Footer.css'
import { BiCopyright} from 'react-icons/bi'
import { FiInstagram, FiFacebook } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlinePhone, AiOutlineInfoCircle, AiOutlineLogin } from 'react-icons/ai'
import DeveloperLinks from './DeveloperLinks'

function Footer(){
    return (
    <>
        <div className="footer">
            <div className="row1">  
                <div className="footer-col1">
                    <ul className="pages">
                        <li><AiOutlineShoppingCart/> Our cars</li>
                        {/* <li><i className="fa fa-bookmark" aria-hidden="true"></i> Booking Page</li> */}
                        <li><AiOutlinePhone/> Contact Us</li>
                        <li><AiOutlineInfoCircle/> Know More</li>
                        <li><AiOutlineLogin/> Login/Sign Up</li>
                    </ul>
                </div>
                <div className="footer-col2">
                    <DeveloperLinks/>    
                </div>  {/*<!--ENd Footer Col2-->*/}
                <div className="footer-col3"></div>
            </div>
        </div>
        <div class="copyright">  {/*<!--Row 2-->*/}
            <span class="copy">
                <BiCopyright/> A-La-Cart November 2020
            </span>
            <span className="social">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FiFacebook/></a>  
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FiInstagram/></a>   
            </span>
        </div>
    </>
    );
}

export default Footer