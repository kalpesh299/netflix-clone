import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './Feachered.scss'
import {NavLink} from 'react-router-dom';

const Feachered = ({type}) => {
      return (
            <div className="feacherd">
                 {
                       type && (
                            <div className="category">
                                  <span>{type==="movei" ? "Movei":"Series"}</span>
                                  <select className="genere" id="genere">
                                  <option>Genre</option>
                                  <option value="adventure">Adventure</option>
                                  <option value="comedy">Comedy</option>
                                  <option value="crime">Crime</option>
                                  <option value="fantasy">Fantasy</option>
                                  <option value="historical">Historical</option>
                                  <option value="horror">Horror</option>
                                  <option value="romance">Romance</option>
                                  <option value="sci-fi">Sci-fi</option>
                                  <option value="thriller">Thriller</option>
                                  <option value="western">Western</option>
                                  <option value="animation">Animation</option>
                                  <option value="drama">Drama</option>
                                  <option value="documentary">Documentary</option>
                                  </select>
                            </div>
                       )
                 }




           <img  src="https://c.ndtvimg.com/2019-10/mqm7h1so_sacred-games-2-instagram_625x300_11_October_19.jpg" alt=""></img>
           <div className="info">
               <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
               <span className="des">The upcoming fourth season of the American science fiction horror drama television series Stranger Things, titled Stranger Things 4, was announced by Netflix in September 2019. The fourth season has continued to be produced by the show's creators the Duffer Brothers</span>
               <div className="buttons">
                   <NavLink to="watch" style={{textDecoration:"none",color:"white"}}>  <button className="play"><PlayArrow/><span>play</span></button> </NavLink>
                     <button className="more"><InfoOutlined/><span>info</span></button>
               </div>
           </div>
                  
            </div>
      )
}

export default Feachered
