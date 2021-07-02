import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import './Watch.scss'
import {NavLink} from 'react-router-dom';

const Watch = () => {
      return (
            <div className="watch">
                  <div className="back">
                      <ArrowBack className="icon"/>
                      <NavLink to='/'>home</NavLink>
                  </div>
                  <video className='video' autoPlay progress controls    src="https://ak.picdn.net/shutterstock/videos/1049039362/preview/stock-footage-european-man-in-face-mask-on-city-street-under-covid-pandemic-k-europe-infected-coronavirus.webm"/>
            </div>
      )
}

export default Watch
