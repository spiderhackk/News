import React, { useState}from 'react'
import validator from 'validator'

 const FeedBack=()=>{
     const [emailError,setEmailError]=useState('')
     const [phoneNumber,setPhoneNumber]=useState('')
     const validateEmail=(e)=>{
         var email=e.target.value

          
    if (validator.isEmail(email)) {
        setEmailError('valid e-mail')
      } else {
        setEmailError('Please enter a valid e-mail!')
      }
     }

     const validatePhone=(e)=>{
         var phone=e.target.value

         if(validator.isMobilePhone(phone)){
             setPhoneNumber('valid phone number')
                     }else{
                         setPhoneNumber("Please enter a valid phone number")
                     }
     }
    
        
        return (
            <div className="card1">
                <h5 >Thank you so much for taking the time!</h5>
                <p > Please provide the below details</p>
                <form >
                    <label>First Name</label><br></br>
                    <input type="text"></input><br></br>
                    <label>Last Name</label><br></br>
                    <input type="text"></input><br></br>
                    <label>Address</label><br></br>
                    <input type="text" style={{fontSize:"2rem"}}></input><br></br>
                    <label>Country</label><br></br>
                    <input type="text" ></input><br></br>
                    <label>Email ID</label><br></br>
                    <input type="text" onChange={(e)=>validateEmail(e)} ></input>
                    <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                            }}>{emailError}</span>
                            <br></br>
                    <label>Phone Number</label><br></br>
                    <input type="text" onChange={(e)=>validatePhone(e)}></input>
                    <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                            }}>{phoneNumber}</span>
                            <br></br>
                    <br></br><br></br>
                    <button className="btn btn-info" >Submit Feedback</button>
                
                </form>

            </div>
        )
    }
    export default FeedBack;
