import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import '../../App.css'

const Header = () => {
  const location = useLocation();

  const menuTextStyle = {
    fontWeight: 400,
    fontSize: 'larger',
    color: 'rgb(20, 130, 160)',
    marginRight: '50px',
  };

  const activeStyle = {
    fontWeight: 600,
    fontSize: 'larger',
    color: 'rgb(20, 130, 160)',
    marginRight: '50px',
    paddingBottom: '0px',
    borderBottom: '5px solid rgb(217, 190, 136)',
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white py-1'>
      <div className='container d-flex justify-content-between align-items-center px-5'>
        <div className='navbar-brand'>
          <img src={Logo} alt='Logo' style={{ width: '100%', maxWidth: '150px' }} />
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
            <NavLink to='/home' className='nav-link' style={location.pathname === '/home' ? activeStyle : menuTextStyle}>
              Home
            </NavLink>
            <NavLink to='/about' className='nav-link' style={location.pathname === '/about' ? activeStyle : menuTextStyle}>
              About
            </NavLink>
            <NavLink to='/products' className='nav-link' style={location.pathname === '/products' ? activeStyle : menuTextStyle}>
              Products
            </NavLink>
            <NavLink to='/contact' className='nav-link' style={location.pathname === '/contact' ? activeStyle : menuTextStyle}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
