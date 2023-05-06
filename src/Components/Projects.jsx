import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ModalData from './ModalData';


const items = [
  {
    image:require('../Images/Projects/youtube.jpg'), 
    video_code:'',
    title:'Youtube website clone', 
    color:'red',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["React.js", "Redux", "Sql", "Sass"]
  }, 
  {
    image:require('../Images/Projects/whatsapp.png'), 
    video_code:'',
    title:'Whatsapp redeign', 
    color:'red',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["React.js", "Css3", "Redux", "Firebase"]
  }, 
  {
    image:require('../Images/Projects/facebook.jpg'), 
    video_code:'',
    title:'Facebook clone website', 
    color:'red',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["Html", "Css3", "Javascript"]
  }, 
  {
    image:require('../Images/Projects/tiktok.png'), 
    video_code:'',
    title:'Tiktok website redesign', 
    color:'red',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["React.js", "Firebase", "Css3", "Redux"]
  }, 
  {
    image:require('../Images/Projects/finger.jpg'), 
    video_code:'',
    title:'Landing page website design', 
    color:'red',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["Html", "Css3", "Javascript"]
  }, 
  {
    image:require('../Images/Projects/food.jpg'), 
    video_code:'',
    title:'Pizza website design', 
    color:'red',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["React.js", "Css3", "Styled components"]
  }, 
  {
    image:require('../Images/Projects/disney.jpg'), 
    video_code:'',
    title:'Disney website clone', 
    color:'red',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
    skills:["Html", "Css3", "Javascript", "Ajax", "Php"]
  }, 
  {
    image:require('../Images/Projects/portofolio.jpg'), 
    video_code:'',
    title:'Portofolio website design', 
    color:'red',
    description:'All rights reserved. This work may not be translated or copied in whole or in part without the written permission of the publisher.', 
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
                   <button className='btn'>Take a look</button>
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
