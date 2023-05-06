import React from 'react'
import { CiFacebook} from "react-icons/ci";
import {VscGithubAlt} from "react-icons/vsc";
import {FiLinkedin, FiYoutube} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Header(props) {


    const SocialLinks = [
         {name:'', icon:<CiFacebook/> , link:''},
         {name:'', icon:<VscGithubAlt/> , link:''},
         {name:'', icon:<FiLinkedin /> , link:''}, 
         {name:'', icon:<FiYoutube/> , link:''}
    ]


  return (
    <div className='header' 
      style={{background:`${props.color ? props.color : 'var(--pm-color)'}`,
             backgroundBlendMode:`${props.blend ? props.blend : ''}` }} >
      <div className="wrapper">
      <div className="navbar">
          <div className="navbar-item">
               <div className="logo">
                   <div className="logo-text">K</div>
               </div>
          </div>
          
          <div className="navbar-item">
              <div className="close-btn">
                 <FaBars/>
              </div>
              <div className="navbar-item">
              <ul>
                  <Link to="#about"><li>01. <span>About</span></li></Link>
                  <Link to="#work"><li>02. <span>Work</span></li></Link>
                  <Link to="#skills"><li>03. <span>Skills</span></li></Link> 
                  <Link to="#projects"><li>04. <span>Projects</span></li></Link>
                  <Link to="#contacts"><li>05. <span>Contacts</span></li></Link>
               </ul>
               <div className="buttons">
                    <Link to='/resume'><button className='bg-main box-text'>Resume</button></Link>
                    <button className='ml-2'>Hire-me</button>
               </div>
              </div>
          </div>



       </div>
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
                    <a href={item.link} alt={item.name} target='_blank'>
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
