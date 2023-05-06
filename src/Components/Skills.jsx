import React from 'react' 
import {TbBrandPython ,TbBrandTailwind, TbCurrencySolana, TbJson, TbBrandPhp, TbApi, TbCurrencyEthereum,TbBrandBootstrap, TbBrandMongodb, TbBrandJavascript,TbBrandSass, TbBrandFirebase,TbBrandGit, TbBrandRedux, TbBrandGithub, TbBrandCss3,TbBrandFlutter, TbBrandHtml5, TbBrandReactNative} from "react-icons/tb";
import {FaNodeJs} from "react-icons/fa";
import { SiMysql, SiAdobexd } from "react-icons/si";
import { Link } from 'react-router-dom';

function Skills(props) {
  const SkillsData = [
     {skill_icon:<TbBrandPython/>, skill_title:'Python'},
     {skill_icon:<TbBrandCss3/>, skill_title:'Python'},
     {skill_icon:<TbBrandHtml5/>, skill_title:'Python'},
     {skill_icon:<TbBrandJavascript/>, skill_title:'Python'},

     {skill_icon:<TbBrandReactNative/>, skill_title:'Python'},
     {skill_icon:<TbBrandFlutter/>, skill_title:'Python'},
     {skill_icon:<TbBrandGit/>, skill_title:'Python'},
     {skill_icon:<TbBrandGithub/>, skill_title:'Python'},

     {skill_icon:<TbBrandRedux/>, skill_title:'Python'},
     {skill_icon:<TbBrandTailwind/>, skill_title:'Python'},
     {skill_icon:<TbBrandSass/>, skill_title:'Python'},
     {skill_icon:<TbBrandFirebase/>, skill_title:'Python'},

     {skill_icon:<TbBrandMongodb/>, skill_title:'Python'},
     {skill_icon:<SiMysql/>, skill_title:'Python'},
     {skill_icon:<TbBrandBootstrap/>, skill_title:'Python'},
     {skill_icon:<TbCurrencyEthereum/>, skill_title:'Python'},


     {skill_icon:<TbApi/>, skill_title:'Python'},
     {skill_icon:<SiAdobexd/>, skill_title:'Python'},
     {skill_icon:<TbBrandPhp/>, skill_title:'Python'},
     {skill_icon:<TbJson/>, skill_title:'Python'},

     {skill_icon:<TbBrandMongodb/>, skill_title:'Python'},
     {skill_icon:<TbCurrencySolana/>, skill_title:'Python'}, 
     {skill_icon:<FaNodeJs />, skill_title:'Python'}, 

  ];

  const GetColor = ()=>{
       if(props.scolor){
          return props.scolor ? props.scolor : props.color;
       }else if(props.color){
          return props.color ? props.color : 'black';
       }else{
          return 'var(--pm-color)';
       }
  }

  return (
    <div className='skills' id='skills' 
    style={{background:`${props.color ? props.color : 'var(--pm-color)'}`,
     backgroundBlendMode:`${props.blend ? props.blend : ''}` }} >
    <div className="wrapper">
        <div className="space">
        <div className="title text-right">
             <h2>03. <span>Skills that i aquired</span></h2>
         </div>
        <Link to="/resume"><div className="link">Open Resume</div></Link>
        </div>
         <div className="skills-row">
         <div class="main">
            <div class="container"> 
               {SkillsData.map((item , index)=>{
                    return( 
                        <div key={index} className="skill-row-item-shape">
                             <div className="ct" style={{background:`${GetColor()}`}} >
                                  {item.skill_icon}
                             </div>
                        </div>  
                    )
               })}9991 0653  3224 4
              </div>
            </div>
         </div>
    </div>
  </div>
  )
}

export default Skills
