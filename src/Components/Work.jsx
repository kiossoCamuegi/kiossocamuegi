import React from 'react'
import { Link } from 'react-router-dom';

function Work() {
  const  WorkData = [
    
    {
        job_company_name:'OWN',
        job_company_type:'Fulltime',
        job_company_position:'Software engineer',
        job_company_date:'From 01.12.2021 to the present date',
        job_company_description:`
        Run the entire software development lifecycle (SDLC)
        Develop flowcharts, layouts and documents to identify needs and solutions
        Write very secure and testable code
        Produce specifications and determine operational feasibility
        Integrate software components into a fully functional software system
        Developer software verification plans and quality assurance procedures.
        `
    },
    
    {
        job_company_name:'Dil',
        job_company_type:'Intern',
        job_company_position:'Software engineer',
        job_company_date:'From 10.06.2021 till 10.10.2021',
        job_company_description:`
        Create Systems and Website Templates, Create Systems Designers, Create Solutions for 
        Troubled Systems, and Implement the Same Solutions. (
        attending departmental meetings; assisting a colleague with relevant tasks; 
         attending client visits; organizing part of a training course, workshop or lecture; and testing products or tools.
        `
    },
      {
        job_company_name:'OWN',
        job_company_type:'Intern',
        job_company_position:'Software engineer',
        job_company_date:'From 06.07.2019 to 10.10.2019',
        job_company_description:`
        Participate in the planning, analysis, modeling and development of software, 
        involving the application of programming languages ​​and environments. (
         attending departmental meetings; assisting a colleague with relevant tasks; 
        attending client visits; organizing part of a training course, workshop or lecture; and testing products or tools.
        )
        `
    }, 
  ];

  return (
    <div className='work-experience' id='work'>
        <div className="wrapper">
       <div className="space">
        <div> <h1><span>02.</span> Work experience</h1></div>
        <div> <Link to="/resume"><div className="link">Open Resume</div></Link></div>
       </div>
          <div className="work-row">
               {WorkData.map((item, index)=>{
                   return(
                     <>
                       <div className={`work-row-item ${(index % 2 === 1) ? 'reverse':'' } `} >
                            <div className="company-box">
                                  <h3>{item.job_company_name}</h3>
                                  <p>{item.job_company_type}</p>
                            </div>
                            <div className="text-data">
                                 <h2>{item.job_company_position}</h2>
                                 <div className="date">{item.job_company_date} </div>
                                <p>{item.job_company_description}</p>
                            </div>
                       </div>
                     </>
                   )
               })}
          </div>
        </div>
     </div>
  )
}

export default Work
