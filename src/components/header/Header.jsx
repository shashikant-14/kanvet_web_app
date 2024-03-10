import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'

const Header = () => {
  const menuTextStyle = {
    fontWeight: 400,
    fontSize: 'larger',
    color: 'rgb(69, 140, 170)',
    marginRight:'50px'
    
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-white bg-white py-3'>
      <div className='container d-flex justify-content-between align-items-center px-5'>
        <div className='navbar-brand'>
          <img width='60%' src={Logo}/>
        </div>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse flex-row-reverse' id='navbarNav'>
          <div className='navbar-nav ml-auto'>
            <Link to='/home' className='nav-link' style={menuTextStyle}>
              Home
            </Link>
            <Link to='/about' className='nav-link' style={menuTextStyle}>
              About
            </Link>
            <Link to='/products' className='nav-link' style={menuTextStyle}>
              Products
            </Link>
            <Link to='/contact' className='nav-link' style={menuTextStyle}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
