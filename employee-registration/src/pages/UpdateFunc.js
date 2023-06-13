import React from "react";
import { Link } from "react-router-dom";
import "./AddFunc.css";
import {useState} from 'react';
import data from '../data/data.json';

const UpdateFunc = () => {
	const [employees, updateEmployees] = useState(data) ;
	const [fullname, setfullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [role, setRole] = useState("");
	const [identity, setID] = useState("");

	const Update = (()=>{

		const newemployee = {
		  name: fullname,
		  emailAddress: email,
		  phone: phone,
		  role: role,
		  identity: identity
		}
		updateEmployees([...employees, newemployee],)
	  })

	return (
		<div className="img">
			   <div>
			   <div className="create-form">
                <div className="row">
                    <label>FullName</label>
                    <input placeholder='Name and surname' value={fullname} onChange={(e) => setfullName(e.target.value)}/>
                </div>
                <div className="row">
                    <label>Email Address</label>
                    <input placeholder='e.g. self@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="row">
				<label>Contact Number</label>
                    <input placeholder='+27 88 888 8888' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="row">
				<label>Postion At Work</label>
                    <input placeholder='e.g. Developer' value={role} onChange={(e) => setRole(e.target.value)}/>
                </div>
				<div className="row">
				<label>ID Number</label>
                    <input placeholder='652398 0011 012' value={identity} onChange={(e) => setID(e.target.value)}/>
                </div>
				<button type='submit' onClick={Update}>Update</button>
            </div>
			   </div>
			<div>
				<Link to={"/"}>Go to homepage</Link>
			</div>
		</div>
	);
};

export default UpdateFunc;
