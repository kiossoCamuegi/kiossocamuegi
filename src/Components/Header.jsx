import React  from 'react'
import { CiFacebook} from "react-icons/ci";
import {VscGithubAlt} from "react-icons/vsc";
import {FiLinkedin, FiYoutube} from "react-icons/fi"; 
import Navbar from './Navbar';

function Header(props) {

    const SocialLinks = [ 
         {name:'', icon:<CiFacebook/> , link:'https://www.facebook.com/kiosso.camuegi.71/'},
         {name:'', icon:<VscGithubAlt/> , link:'https://kiossocamuegi.github.io/'},
         {name:'', icon:<FiLinkedin /> , link:'https://www.linkedin.com/in/kiosso-camuegi-564b79211/'}, 
         {name:'', icon:<FiYoutube/> , link:'#'}
    ];

  return (
    <div className='header' 
      style={{background:`${props.color ? props.color : 'var(--pm-color)'}`,
             backgroundBlendMode:`${props.blend ? props.blend : ''}` }} >
      <div className="wrapper">
       <Navbar/>
       <div className="hero" id='about'>
           <div className="intro">Hello buddy , my name is</div>
            <h1 className="name">Kiosso Camuegi.</h1>
            <h2>I Build things for the Internet.</h2>
            <p className="desciption">
            First, I love writing code, since Software engineering is a never-ending puzzle that 
              <span> I am passionately</span>   committed to solving. I believe in the power of programming to transform and improve the lives of people around the world.
            </p>
            <a href="mailto:kiossocamuegi@gmail.com"><button>Don't be shy, get in touch</button></a>
       </div>
       <div className="social-links">
          <ul>
            {SocialLinks.map((item, index)=>{
               return (
                 <li key={index}>
                    <a href={item.link} alt={item.name}  rel="noreferrer" target='_blank'>
                       {item.icon}
                   </a>
                </li>)
            })}
            <div className="line"></div>
          </ul>
       </div> 
      </div>
    </div>
  )
}

 

export default Header
