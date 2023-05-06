import React from 'react'

function ModalData(props){
  return (
    <div>
       {props.toggle_btn ? props.toggle_btn : <></>}
    </div>
  )
}

export default ModalData
 