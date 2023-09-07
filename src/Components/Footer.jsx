import React from 'react'
import { CiFacebook} from "react-icons/ci";
import {VscGithubAlt} from "react-icons/vsc";
import {FiLinkedin, FiYoutube} from "react-icons/fi";
import { Link } from 'react-router-dom';

function Footer(props) { 
  
  const SocialLinks = [
    {name:'', icon:<CiFacebook/> , link:'https://www.facebook.com/kiosso.camuegi.71/'},
    {name:'', icon:<VscGithubAlt/> , link:'https://kiossocamuegi.github.io/'},
    {name:'', icon:<FiLinkedin /> , link:'https://www.linkedin.com/in/kiosso-camuegi-564b79211/'}, 
    {name:'', icon:<FiYoutube/> , link:'#'}
]

  return (
    <div id='contacts' className='footer' style={{background:`${props.color ? props.color : 'var(--pm-color)'}`,
    backgroundBlendMode:`${props.blend ? props.blend : ''}` }}>
      <div className="wrapper">
      <div className="info">
      <div className="space">
        <div className="title text-right">
             <h2>05. <span>Contact-me</span></h2>
         </div>
        <Link to="/resume"><div className="link">Open Resume</div></Link>
        </div>
             <div className="social-links">
                 <ul>
                   {SocialLinks.map((item, index)=>{
                      return ( 
                        <a key={index} href={item.link}  rel="noreferrer" alt={item.name} target='_blank'>
                         <li> 
                            {item.icon} 
                          </li>
                        </a>)
                    })}
                 </ul>
             </div>
      </div>
      </div>
       <div className="footer-down" style={{background:'#fff'}}>
          <div className="wrapper">
             <div className="contacts">
                 <div className="box"> kiossocamuegi@gmail.com</div>
                 <div className="box">+244 942 383 808</div>
                 <div className="box">kiossocamuegi.pages.dev</div>
             </div>
          </div>
       </div>
    </div>
  )
} 





export default Footer

// *100*092 895 161 109 60#

// yarn add animate.css apexcharts axios   bulma chart.js cross-env draft-js draftjs-to-html react-animated-css  emoji-picker-react framer-motion jitsi jwt-decode mdb-react-ui-kit  moment mui-datatables  react-apexcharts  react-big-calendar   react-datetime-picker react-draft-wysiwyg react-draggable react-facebook-photo-grid    react-fb-image-grid react-flags-select react-icons animate.css cookie-parser react-multi-select-component react-multiselect-dropdown-bootstrap  react-redux react-select-search  react-slick react-toastify redux react-window react-virtualized-auto-sizer dhtmlx-scheduler dhtmlx-gantt jsonwebtoken dotenv  react-flags-select store2 sequelize multer sequelize morgan express http-errors mysql2  react-router-dom@5.2.0 dhtmlx-scheduler dhtmlx-gantt electron wait-on concurrently electron-is-dev electron-builder ag-grid-community ag-grid-react ag-grid-enterprise bootstrap react-bootstrap  