import React from 'react' 
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';

function Navbar(props) {
    const [active, setActive] = useState(false);
    const toggleMenu = ()=>{ 
        setActive(active === true ?  false : true);
     }
  return (
     <Container className={props.bg ? 'bg-pm' : ''} >
         <div className="wrapper">
         <div className="navbar">
            <div className="navbar-item">
                <Link to='/'>
                    <div className="logo">
                        <div className="logo-text">K</div>
                    </div>
                </Link>
            </div> 
            <div className="navbar-item">
                <div className="close-btn"  onClick={()=>toggleMenu()}>
                <FaBars/>
                </div>
                <div className={`navbar-item  ${active ? ' active' :  ''} `}>
                <br />
                <div className="close-btn" onClick={()=>toggleMenu()}>
                        <FaTimes/>
                </div>
                <br />
                <ul>
                    <Link to="/#about"><li>01. <span>About</span></li></Link>
                    <Link to="/#work"><li>02. <span>Work</span></li></Link>
                    <Link to="/#skills"><li>03. <span>Skills</span></li></Link> 
                    <Link to="/#projects"><li>04. <span>Projects</span></li></Link>
                    <Link to="/#contacts"><li>05. <span>Contacts</span></li></Link>
                </ul>
                <div className="buttons">
                    <Link to='/resume'><button className='bg-main box-text'>Resume</button></Link>
                    <Link to='/hire_me'><button className='ml-2'>Hire-me</button></Link>
                </div>
                </div>
            </div> 
            </div>
         </div>
     </Container>
  )
}

const Container = styled.div`

`;

export default Navbar
