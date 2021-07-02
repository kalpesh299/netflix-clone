import React, { useRef, useState } from 'react'
import './Register.scss'
import {NavLink} from 'react-router-dom';

const Register = () => {
     const [email,setemail]=useState("")
     const [password,setpassword]=useState("")
     const handelstart =() =>{
           setemail(emailref.current.value)
     }
     const handelfinish =() =>{
      setpassword(passwordref.current.value)
}
     const emailref=useRef();
     const passwordref=useRef();
     console.log(email)
    console.log(password)
     
      return (
            <div className="register">
                  <div className="top">
                  <NavLink to='/'>   <img         
                            className="logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt=""></img></NavLink>
                          <NavLink to ='/login'><button className="loginbutton">Sighn in</button></NavLink>
                  </div>
                  <div className="container">
                 <h1>Unlimited movies, TV shows, and more.</h1>
                 <h2>Watch anywhere. Cancel anytime.</h2>
                   <p>
                  Ready to watch? Enter your email to create or restart your membership.
                  </p>{!email ?
                        <div className="input">
                        <input type="email" placeholder="Enter your email" ref={emailref}></input>
                        <button className="registerbutton" onClick={handelstart}>Gets Started</button>
                  </div> : <form className="input">
                        <input type="password" placeholder="password" ref={passwordref}></input>
                        <button className="registerbutton" onClick={handelfinish}>Start</button>
                  </form> 
                  }


                  
               </div>
            </div>
      )
}

export default Register
