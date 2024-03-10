import React from 'react';
import Front from '../../assets/Front.png';

const Home = () => {
  return (
    <div className='row text-center p-0 m-0'>
      <div className='col-12 p-0 m-0'>
        <img src={Front} className='img-fluid border-0 p-0 m-0' style={{ width: '100%', height: '550px' }} alt='Kanvet Front Logo' title='Kanvet Front Logo' />
      </div>
    </div>
  );
};

export default Home;
