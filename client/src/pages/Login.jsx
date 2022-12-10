
import React from 'react'
import "../PageStyles/login.css"

export default function Login() {

    const handleClick = ()=>{
        console.log("clicked")
    }
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
                <form className="loginBox" onSubmit={handleClick}>
                
                    <input placeholder="Email" type="email" className="loginInput" />
                    <input placeholder="Password" type="password" className="loginInput" />
                    <button  className="loginButton" >Sign In</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className='loginRegisterButton'>Sign Up</button>
                    
                </form>
            </div>

            





        </div>
      
    </div>
  );
}
