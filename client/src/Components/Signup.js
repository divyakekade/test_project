import '../App.css'
import { useState } from 'react' 
import { createUser } from '../api';


function Signup(){
    const [user,setUser]=useState({firstname:"",lastname:"",email:"",password:"",about:""});
    const handleChangeS = async (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
    }
    const handleSubmit = async () => {
        console.log(user);
        createUser(user);
    }
    return (
        <>
           <div className="form">
            <input type="text" id="firstname" onChange={(e)=>handleChangeS(e)} placeholder="first name" className="login-input"></input>
            <input type="text" id="lastname" onChange={(e)=>handleChangeS(e)} placeholder="last name" className="login-input"></input>
            <input type="email" id="email" onChange={(e)=>handleChangeS(e)} placeholder="email" className="login-input"></input>
            <input type="password" id="password" onChange={(e)=>handleChangeS(e)} placeholder="password" className="login-input"></input>
            <input type="text" id="about" onChange={(e)=>handleChangeS(e)} placeholder="about me" className="login-input"></input>
           <button className="signup-button" onClick={handleSubmit} type="submit">Submit</button>
            </div>
        </>
    )
}

export default Signup