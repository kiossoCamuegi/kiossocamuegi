import React from 'react'
import { FaDownload } from 'react-icons/fa'
const file = require("./Docs/RESUME.pdf");
const file2 = require("./Docs/CV.pdf");

function Resume() {
  return (
    <div className='resume'>
      
        <div className='block'>
        <a href={file} download >
            <button className="btn  btn-downlaod"><FaDownload/> Download - English Version</button>
         </a>
           <br />
           <a href={file2} download >
            <button className="btn  btn-downlaod"><FaDownload/> Download - Portuguese Version</button>
         </a>
        </div>
    </div>
  )
}

export default Resume
