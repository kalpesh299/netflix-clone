import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './Listitem.scss'
import {NavLink} from 'react-router-dom';

const Listitem = ({index,url}) => {
      const [ishovered,setishovered] = useState(false);
      const trailer =
      "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
      return (
            <div className="listitem" style={{left:ishovered && index * 225 -50+index*2.5}} onMouseEnter={() =>setishovered(true)} onMouseLeave={()=>setishovered(false)}>
                  <img src={url} alt=""></img>
                  
                  {ishovered &&(
                <>  <video src={trailer} autoPlay="true" loop></video>
           <div className="iteminfo">
                <div className="icons">
                    <NavLink to='/watch' style={{textDecoration:"none",color:"white"}}> <PlayArrow className="icon"/></NavLink> 
                      <Add className="icon"/>
                      <ThumbUpAltOutlined className="icon"/>
                      <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="iteminfotop">
                      <span>1hr 29min</span>
                      <span className="limit">+16</span>
                      <span>2022</span>
                </div>
                <div className="desc">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolorLorem ipsum dolor sit amet, 
                consectetur Lorem ipsum dolor</div>
                <div className="name">Action</div>
           </div>
           
           </> )} 
            </div>
      )
}

export default Listitem
