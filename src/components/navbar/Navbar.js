import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import './Navbar.scss'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
      const [IsScrolled, setIsScroll] = useState(false)
      window.onscroll = () => {
            setIsScroll(window.pageYOffset === 0 ? false : true)
            return () => (window.onscroll = null)
      }
      console.log(IsScrolled)
      return (
            <div className={IsScrolled?"navbar scrolled" : "navbar"}>
                  <div className="container">
                        <div className="left">
                            <NavLink to='/'>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="logo"></img></NavLink>
                              <span>Homepage</span>
                              <span>Series</span>
                              <span>Movies</span>
                              <span>New and Popular</span>
                              <span>My List</span>
                        </div>
                        <div className="right">
                              <Search className="icon" />
                              <span>Kids</span>
                              <Notifications className="icon" />

                              <img src="https://res.cloudinary.com/decuv4pwp/image/upload/v1624984010/kalpesh/kalpesh_photo-min_wcjqrh.jpg" alt="loginimg"></img>
                              <div className="profile">
                                    <ArrowDropDown className="icon" />
                                    <div className="options">
                                          <span>Settings</span>
                                          <NavLink to='/register' style={{textDecoration:"none",color:"white"}}>  <span>register</span></NavLink>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Navbar
