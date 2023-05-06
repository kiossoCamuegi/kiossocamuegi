import React from 'react'
import { FaDownload } from 'react-icons/fa'
const file = require("./Docs/RESUME.pdf");

function Resume() {
  return (
    <div className='resume'>
         <a href={file} download >
            <button className="btn  btn-downlaod"><FaDownload/> DOWNLOAD NOW</button>
         </a>
    </div>
  )
}

export default Resume
