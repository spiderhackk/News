import React,{useState,useEffect} from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import './App.css'
export const Header = () => {

   
    
    return (
        <div>
             <h3 className="text-center">Welcome To NewsRoom</h3>
             <div className="card-data">
            <ul className="nav flex-column">
            <li className="nav-item">
                    <h5><Link className="nav-link" to="">Hi Reader,</Link></h5>
                    <p className="data">Here's your News </p>
                </li>
                <br></br>
                <li className="nav-item">
                    <h5 className="data">View toggle</h5>
                   <button type="button" className="button1"><Link className="nav-link" to="/"><i className="fas fa-bars"></i></Link></button> 
                </li>
                
               <br></br>
                <li className="nav-item">
                    <h5 className="data">Have a Feedback?</h5>
                    <button  type="button" className="button" ><Link className="nav-link" to="/feedback">We are listening</Link></button>
                </li>
                
            </ul>
            </div>
           
        </div>


    )
}