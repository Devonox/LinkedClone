import React from 'react';
import './headerOption.css';
import { Avatar } from '@mui/material';


function Headeroption({avatar, Icon, title, onClick }) {
 
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption_icon' />}
      {avatar && <Avatar className='headerOption_icon' src={avatar} />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default Headeroption;