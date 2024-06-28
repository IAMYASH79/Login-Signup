import React, { useState } from 'react'
import "./loginSignup.css"

const LoginSignup = () => {
    const[action, setAction] = useState("Sign Up");


  return (
    <div className='container'>
    <div className='header'>
        
    <div className="text">{action}</div>
    <div className="underline"></div>
    </div>
    <div className="inputs">
        <div className="input">
            <input type="text" placeholder='Enter Your Name' />
        </div>
        <div className="inputs">
        <div className="input">
            <input type="email" placeholder='Enter Your Email'/>
        </div>
        <div className="inputs">
        <div className="input">
            <input type="password" placeholder='Enter Your Password'/>
        </div>
    </div>
    </div>
    </div>
    <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
    <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}>Sign Up</div>
        <div className={action==="Sign Up?"submit gray":submit}>Login</div>
    </div>
</div>
  )
}

export default LoginSignup