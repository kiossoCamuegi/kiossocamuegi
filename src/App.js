 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Work from './Components/Work';
import Skills from './Components/Skills';
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Projects from './Components/Projects';
import { useEffect } from 'react';
import Footer from './Components/Footer';
import Resume from './Resume';
import Hire from './Hire';

function App() {
  const ColorData = {
     background:'linear-gradient(to top, #00c6fb 0%, #005bea 100%)',
     blend:'overlay, hard-light, normal',
     background2:'#0000'
  }
 
  const Colors = [ 
     {active:true, title:'main-theme', pm:'#011627', sc:'#2ec4b6', trd:'#53b3cb', txt:'#ffff', mc:'', mc_bg:'', mc_txt:'' }, 
     {active:false, title:'gold-black-theme', pm:'black', sc:'#FDB833', trd:'#FFF056', txt:'#000', mc:'', mc_bg:'', mc_txt:''}, 
     {active:false, title:'purple-theme', pm:'#240046', sc:'#724CF9', trd:'#5603AD', txt:'#ffff', mc:'', mc_bg:'', mc_txt:''}, 
     {active:false, title:'black-and-white-theme', pm:'#000', sc:'grey', trd:'silver', txt:'#ffff', mc:'', mc_bg:'', mc_txt:''}, 
     {active:false, title:'white-theme', pm:'#000', sc:'#2176FF', trd:'#ffff', txt:'#000', mc:'', mc_bg:'', mc_txt:'', lead:'#2176FF'}, 
  ]
 

  const getTheme = ()=>{
     for (let i = 0; i < Colors.length; i++) {
        if(Colors[i].active === true) return i; 
     }
  }

  useEffect(()=>{
    document.documentElement.style.setProperty('--pm-color', Colors[getTheme()].pm);
    document.documentElement.style.setProperty('--sc-color', Colors[getTheme()].sc);
    document.documentElement.style.setProperty('--trd-color', Colors[getTheme()].trd);
    document.documentElement.style.setProperty('--box-text-color', Colors[getTheme()].txt);
  },[]);

  // color={ColorData.background} blend={ColorData.blend} 

  return ( 
    <BrowserRouter>
        <Routes>
             <Route path='/' element={
                    <>
                    <Header  props={'' /*color={ColorData.background} blend={ColorData.blend} */} />
                    <Work/>
                    <Skills props={'' /*scolor={ColorData.background2} color={ColorData.background} blend={ColorData.blend} */} />
                    <Projects/>
                    <Footer/>
                   </>
                 } /> 
             <Route path='/resume' element={<Resume/>}/>     
             <Route path='/hire_me' element={<Hire/>} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
