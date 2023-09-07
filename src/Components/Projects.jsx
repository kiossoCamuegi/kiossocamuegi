import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ModalData from './ModalData';

 

const items = [
  {
    image:require('../Images/Projects/bank.jpg'), 
    video_code:'',
    title:'Standard Bank Website redesign',  
    link:'https://standardbank.vercel.app',  
    description:'Standard Bank Group Limited is one of the largest financial services groups in South Africa. It operates in 38 countries, of which 18 are in Africa.', 
    skills:["React.js", "Bootstrap", "Css",]
  }, 
  {
    image:require('../Images/Projects/movicel.png'), 
    video_code:'',
    title:'Movicel Website',  
    link:'https://movicel.ao/', 
    company:{
        name:"POWERED BY : OWN",
        link:"https://own.co.ao"
    } ,
    description:'Movicel is an Angolan telecommunications company, specialized in mobile telephony services', 
    skills:["React.js", "Node.js", "Express.js", "Sequelize", "Mysql" ,  "Css"]
  }, 
  {
    image:require('../Images/Projects/hosting.jpg'), 
    video_code:'',
    title:'Hosting website design',  
    link:'https://kiossocamuegi.github.io/Serverservicewebsite/', 
    description:'hosting is a wonderful hosting website with a unique interface created with the best stacks out there. the website has more than 4 awesome pages.', 
    skills:["Html", "Javascript", "Css"]
  }, 
  {
    image:require('../Images/Projects/hungrylion.jpg'), 
    video_code:'',
    title:'Hungry lion website redesign', 
    link:'https://kiossocamuegi.github.io/hungrylion/', 
    description:'We all have a hungry lion inside us, and good food comes from the best websitesz and one of them is the hungrylion website redesign', 
    skills:["Html", "Javascript", "Css"]
  }, 
  {
    image:require('../Images/Projects/handyman.jpg'), 
    video_code:'',
    title:'Handyman website',  
     link:' https://kiossocamuegi.github.io/handyman/', 
    description:'All large companies have  a large website and in this case Handyman is the perfect example for a Construction website design.', 
    skills:["Html", "Javascript", "Css"]
  },  
  {
    image:require('../Images/Projects/smallapps.jpg'), 
    video_code:'',
    title:'Small Apps website', 
    link:'https://kiossocamuegi.github.io/smallapps/', 
    description:'Showcase your app with Small Apps,  Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App.', 
    skills:["Html", "Javascript", "Css"]
  },  
  {
    image:require('../Images/Projects/car.jpg'), 
    video_code:'',
    title:'2D Desert racing car Game', 
    link:'https://kiossocamuegi.github.io/wizacar',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["Html", "Css3", "Javascript"]
  },
  {
    image:require('../Images/Projects/builders.jpg'), 
    video_code:'',
    title:'Builders website design', 
    link:' https://kiossocamuegi.github.io/builders/', 
    description:'A simple but handsome landing page design for small companies is all you need when starting a Hustle', 
    skills:["Html", "Javascript", "Css"]
  }, 
  {
    image:require('../Images/Projects/microsoftexcel.jpg'), 
    video_code:'',
    title:'Microsoft excel (website version)', 
    link:' https://kiossocamuegi.github.io/microsoftexcelclone/', 
    description:'Microsoft excel is a wonderful platform, imagine what it would be like to use this amazing software in a browser, ready here it is.', 
    skills:["Html", "Javascript", "Css"]
  },
  {
    image:require('../Images/Projects/accesslite.jpg'), 
    video_code:'',
    title:'ACCESSELITE website design', 
    link:'https://kiossocamuegi.github.io/ACCESSELITE/', 
    description:'Accesslite is simple but a nice healthcare website design for your love ones, take  a look and see some magic .', 
    skills:["Html", "Javascript", "Css"]
  }, 
  {
    image:require('../Images/Projects/bureua.jpg'), 
    video_code:'',
    title:'Bureua website design', 
    link:'https://kiossocamuegi.github.io/bureua/', 
    description:'Bureua is simple but a nice team website design for your team, take  a look and see the power of tech in action.', 
    skills:["Html", "Javascript", "Css"]
  }, 
  {
    image:require('../Images/Projects/ekhavil.jpg'), 
    video_code:'',
    title:'Ekhavil website', 
    link:'https://ekhavil.com', 
    description:'ekhavil is one of the best real estate companies in angola, and I had the honor of helping with the creation of the website, namely the dashboard', 
    skills:["Html", 'Php', 'Jquery', 'API', "Javascript", "Css"]
  }, 
  /*** fake ones */
  {
    image:require('../Images/Projects/youtube.png'), 
    video_code:'',
    title:'Youtube website clone', 
    link:' ',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["React.js", "Redux", "Sql", "Sass"]
  }, 
  {
    image:require('../Images/Projects/whatsapp.png'), 
    video_code:'',
    title:'Whatsapp redeign', 
    link:' ',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["React.js", "Css3", "Redux", "Firebase"]
  }, 
  {
    image:require('../Images/Projects/facebook.jpg'), 
    video_code:'',
    title:'Facebook clone website', 
    link:' ',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["Html", "Css3", "Javascript"]
  },  
  {
    image:require('../Images/Projects/bns.jpg'), 
    video_code:'',
    title:'Bynary website design',  
    link:'https://kiossocamuegi.github.io/bns/', 
    description:'Bynary considers every little detail to ensure that the system run smoothly and responsively.', 
    skills:["Html", "Javascript", "Css"]
  }, 
  {
    image:require('../Images/Projects/tiktok.png'), 
    video_code:'',
    title:'Tiktok website redesign', 
    link:' ',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["React.js", "Firebase", "Css3", "Redux"]
  }, 
  {
    image:require('../Images/Projects/finger.jpg'), 
    video_code:'',
    title:'Landing page website design', 
    link:' ',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["Html", "Css3", "Javascript"]
  }, 
  {
    image:require('../Images/Projects/food.jpg'), 
    video_code:'',
    title:'Pizza website design', 
    link:' ',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["React.js", "Css3", "Styled components"]
  }, 
  {
    image:require('../Images/Projects/disney.jpg'), 
    video_code:'',
    title:'Disney website clone', 
    link:' ',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["Html", "Css3", "Javascript", "Ajax", "Php"]
  }, 
  {
    image:require('../Images/Projects/portofolio.jpg'), 
    video_code:'',
    title:'Portofolio website design', 
    link:'https://kiossocamuegi.github.io/portofoliodesign/',
    description:"There is no better way to demonstrate your skills than by creating projects, that's why jsy has a portfolio", 
    skills:["Html", "Css3", "Javascript"]
  }, 
];


function Projects() {
  return (
    <div className='projects' id='projects'>
        <div className="wrapper">
          <div className="space">
          <div className="title text-right">
              <h2>04. <span>scandalous projects</span></h2>
          </div>
          <Link to="/resume"><div className="link">Open Resume</div></Link>
          </div>
          <section>            
             <PaginatedItems itemsPerPage={6} />
          </section> 
        </div>
     </div>
  )
}

function Items({currentItems}){
  return( 
    <section className="projects-row">  
     {currentItems &&
      currentItems.map((item)=>(
      <article video_code={item.video_code} className="project-card">
          <div className="card-data">
          <div className="image">
          {item.company ?  
           <a href={item.company.link} target='_blank'>
               <div className="badge bg-main">
                {item.company ? item.company.name : ""}
            </div>
           </a> 
          : ""} 
           <img src={item.image} alt="" />
            </div>
            <h3 className="title">{item.title}</h3>
            <p>{item.description}</p>
            <div className="skills-box">
              {item.skills.map((el, i)=>{
                return <div className="skill" key={i}><div className="dot"></div> {el}</div>
              })}
            </div>
            <ModalData toggle_btn={
                <a target='_blank' href={item.link}><button className='btn'>Take a look</button></a>
             }/>
          </div>
        </article> 
      ))
      }
   </section> 
  )
}

function PaginatedItems({ itemsPerPage }) {  
  const [itemOffset, setItemOffset] = useState(0); 
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage); 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length; 
    setItemOffset(newOffset);
  };


  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" > "
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" < "
        renderOnZeroPageCount={null}
      />
    </>
  );
}

 
export default Projects
