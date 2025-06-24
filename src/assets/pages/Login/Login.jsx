import React from 'react'
import './Login.css'
import Logo from '../../logo.png'

export const Login = () => {
  return (
    <div className="login">
      <img src={Logo} alt="" className='loginLogo' />
      <div className="loginForm">
        <h1>Sign Up</h1>

        <form>
            <input type="text" name="" id="" placeholder='Your Name'/>
            <input type="email" name="" id="" placeholder='Email Address'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <button>Sign Up</button>
            <div className="formHelp">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember Me</label>
              </div>

              <p>Need Help?</p>
            </div>
        </form>
      </div>
    </div>
  )
}
