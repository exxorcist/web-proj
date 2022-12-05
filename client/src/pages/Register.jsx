
import React from 'react'
import "../PageStyles/register.css"

export default function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>VeteranHub</h3>
                <span className="loginDesc">
                    Welcome to Veterans World
                </span>

            </div>
            <div className="loginRight">
                <div className="loginBox">
                
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button  className="loginButton" >Sign Up</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className='loginRegisterButton'>Sign In</button>
                    
                </div>
            </div>

            





        </div>
      
    </div>
  );
}
