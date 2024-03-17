import React from 'react';
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { VscTriangleRight } from "react-icons/vsc";

import './Footer.css'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container py-5">
                <div className="row footer-row">
                    <div className='col-md-4'>
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><VscTriangleRight className="footer-icons" /><NavLink to={'/home'} className='nav-link'>Home</NavLink></li>
                            <li><VscTriangleRight className="footer-icons" /><NavLink to={'/about'} className='nav-link'>About</NavLink></li>
                            <li><VscTriangleRight className="footer-icons" /><NavLink to={'/products'} className='nav-link'>Products</NavLink></li>
                            <li><VscTriangleRight className="footer-icons" /><NavLink to={'/contact'} className='nav-link'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h4>CONTACT</h4>
                        <div className='row mb-3'>
                            <span className='col-auto'><MdLocationOn className="footer-icons" /></span>
                            <span className='col p-0'> 123 Main Street City, State, ZIP</span>
                        </div>
                        <div className='row mb-3'>
                            <span className='col-auto'><MdPhone className="footer-icons" /></span>
                            <span className='col p-0'>123-456-7890</span>
                        </div>
                        <div className='row mb-3'>
                            <span className='col-auto'><MdEmail className="footer-icons" /></span>
                            <span className='col p-0'>info@example.com</span>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div style={{ backgroundColor: 'rgb(217, 217, 217)', border: '1px solid gray', width: '100%', height: '160px', boxShadow: '0px 3px 6px gray' }}>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
