import React from 'react'
import { useState } from 'react'
import './post.css'
import { Avatar } from '@mui/material'
import Inputoptions from '../inputop/Inputoptions'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpSharp } from '@mui/icons-material'

function Post({name,description,photUrl,message}) {
  
  return (
    <div className='post'>
        <div className="post_header">
          <Avatar/>
          <div className="post_info">
            <h2>
              {name}
            </h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
        </div>
        
        <div className="post_button">
          <Inputoptions Icon = {ThumbUpSharp} title="Like" color = "gray"/>
          <Inputoptions Icon={ChatOutlined} title="Comment" color="gray"/>
          <Inputoptions Icon={ShareOutlined} title="Share" color="gray"/>
          <Inputoptions Icon={SendOutlined} title="Send" color="gray"/> 
        </div>
    </div>
  )
}

export default Post