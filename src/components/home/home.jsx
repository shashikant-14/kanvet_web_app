import React from 'react';
import Front from '../../assets/Front.png';

const Home = () => {
  return (
    <div className='row p-0 m-0'>
      <div className='col-12 p-0 m-0'>
        <img src={Front} style={{ width: '100%'}} alt='Kanvet Front Logo' title='Kanvet Front Logo' />
      </div>
      <div className='col-12'>
        <div className='col-lg-4 col-md-5 col-sm-12 m-lg-5 py-5'>
          <h1 style={{ color: 'rgb(20, 130, 160)', fontSize:'1.5rem', fontWeight:'700', position:'relative'}}>KANVET HEALTHCARE <span style={{position:'absolute', width:'50%', maxWidth:'200px', borderBottom: '6px solid rgb(252, 215, 144)', top:45, left:0, bottom:0}}></span></h1>
          <p style={{ margin:'25px 0px', fontWeight:'600' }}>Welcome to KANVET HEALTHCARE, a distinguished veterinary feed supplement manufacturer with over two decades of experience, enhancing cattle's health and growth. Based in Pune, Maharashtra, India, our commitment is to provide top-notch products for the dairy industry.</p>
          <span className='px-4 py-2' style={{borderRadius:'20px', backgroundColor:'rgb(252, 215, 144)'}}>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
