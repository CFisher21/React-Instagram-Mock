import './App.css'
import React from 'react';




function Login(props) {
   
  return (
      
    <div className="login-container">

        <form className="signInForm">
        <h1 className="Finstagram">Finstagram</h1>
          <div className="center">
            <input name='username' type="text" placeholder=" Username" ></input>
          </div>
          <div className='center' id='top-margin'>
            <input type="password" className="Password" placeholder=' Password '></input>
          </div>
          <div className="center">
            <a href='http://localhost:3000/Feed' className='loginButton'><p className='loginCenter'>Login</p></a>
          </div>
          <div className='center'>
          <button className='forgotPassword'>Forgot Password?</button>
          </div>
        </form>
        <div className='login-bottem'>
          <div className='center'>
          <p className='goldText'>Don't have an account? <button className='goldTextButton'>Sign up</button></p>
          </div>
        </div>
      </div>
      
      
    );
  }
  
  export default Login

