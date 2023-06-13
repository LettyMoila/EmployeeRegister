import React from "react";
import "./AddFunc.css";
import { Link } from "react-router-dom";
import { useState} from 'react';
import data from '../data/data.json';

const SearchFunc = () => {
	const [employees,setEmployees] = useState(data) ;
	const [fullname, setfullName] = useState("")

  const search = ((e)=>{
	e.preventDefault();

	const searchEmp= {name: fullname}
	let searchProperty = 'name';
	setEmployees([...employees, searchEmp],)
  })
  
	return (
	<div className="img">
		<div>
			{employees.map((employee)=>(
				<div className="results"> 
				<h1> {employee.name} </h1>
				<h1> {employee.emailAddress} </h1>
				<h1> {employee.phone} </h1>
				<h1> {employee.role} </h1>
				<h1> {employee.identity} </h1>
				
				</div>
			))}
		</div>
		<div className="table">
			<table>
				<tr className="tableHead">
					<th>fullname</th>
				</tr>

				<tr>
							
					<td> 
						<input type="text"  placeholder="Enter fullname here"  onChange= {(event)=> setfullName(event.target.value)}/>
					</td>		
				</tr>
			</table>
		</div>
				<button onClick={search}>Search</button>
				<Link to={"/"}>Go to homepage</Link>
		</div>
		
	);
};

export default SearchFunc;
