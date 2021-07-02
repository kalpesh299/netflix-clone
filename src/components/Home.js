import List from '../components/list/List'
import React from 'react'
import Feachered from './featured/Feachered'
import './Home.scss'
import Navbar from './navbar/Navbar'



const Home = () => {
      return (
            <div className="home">
               <Navbar/>
               <Feachered/>
               <List/>
               <List/>
               <List/>
               
            </div>
      )
}

export default Home
