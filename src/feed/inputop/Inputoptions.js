import React from 'react'
import "../inputop/inputOptions.css"

function Inputoptions({title,color,Icon}) {
  return (
    <div className='inputOptions'>
        <Icon style = {{color:color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default Inputoptions