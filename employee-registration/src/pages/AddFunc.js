import React from "react";
import "./AddFunc.css";
import { Link } from "react-router-dom";

import data from '../data/data.json';
import {useState} from 'react';

const AddFunc = () => {

  /*function myName(e) {
    e.preventDefault()
    console.log("My name is Letty")
  }*/

  const [employees, setEmployees] = useState(data) ;
  const [fullname, setfullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [identity, setID] = useState("")


  const add = (e)=>{
      e.preventDefault();
      const newemployee = {
        name: fullname,
        emailAddress: email,
        phone: phone,
        role: role,
        identity: identity
      }
      setEmployees([...employees, newemployee],)
    }
 
	return (
        <div className="App">
      
        <div className='img'>
          <header className="App-header">
            <h1 >Employee Register</h1>
          </header>
          
          {employees.map((employee)=>(
          <div className="results"> 
            <h1> {employee.name} </h1>
            <h1> {employee.emailAddress} </h1>
            <h1> {employee.phone} </h1>
            <h1> {employee.role} </h1>
            <h1> {employee.identity} </h1>
            
          </div>


     ))}
          <form id="EmployeeForm">
              <div className='row'>
                <div className='col_1'>
                  <label>Enter your name and surname:</label>
                </div>
                <div className='col_2'>
                  <input type="text"  placeholder="Enter fullname here"  onChange= {(event)=> setfullName(event.target.value)} />
                </div>
              </div>
            
              <div className='row'>
                <div className='col'>
                  <label>Enter your email address:</label>
                </div>
                <div className='col_2'>
                <input type="text"  placeholder="Enter email address here"  onChange= {(event)=> setEmail(event.target.value)}/>
                </div>
              </div>
    
              <div className='row'>
                <div className='col'>
                  <label>Enter your phone number:</label>
                </div>
                <div className='col_2'>
                <input type="text"  placeholder="Enter phone number here"  onChange= {(event)=> setPhone(event.target.value)} />
                </div>
              </div>
    
              <div className='row'>
                <div className='col'>
                  <label>Enter your position at work:</label>
                </div>
                <div className='col_2'>
                <input type="text"  placeholder="Position at work here"  onChange= {(event)=> setRole(event.target.value)} />
                </div>
              </div>
    
              <div className='row'>
                <div className='col'>
                  <label>Enter your ID number:</label>
                </div>
                <div className='col_2'>
                <input type="text"  placeholder="Enter ID number here"  onChange= {(event)=> setID(event.target.value)} />
                </div>
    
              
            </div>
            
                <button onClick={add}>Submit</button>
                <Link to={"/"}>Go to homepage</Link>
          </form>
        </div>
      </div>
	);
};

export default AddFunc;
