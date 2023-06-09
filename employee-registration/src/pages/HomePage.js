import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className='img'>

      <div className='container'>

          
          <div className='LinkContainer'>
            <h1>Welcome to the Home Page!</h1>

            <div className='frame'>
              <Link to="/AddFunc">Add an employee</Link>
            </div>

            <div className='frame'>
              <Link to="/SearchFunc">Search for an employee</Link>
            </div>

            <div className='frame'>
              <Link to="/UpdateFunc">Update details</Link>
            </div>

            <div className='frame'>
              <Link to={"./DeleteFunc"}>Delete employee details</Link>
            </div>     

          </div>
    
        </div>
    </div>
  );
};

export default HomePage;
