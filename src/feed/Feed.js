import React from 'react'
import { useState } from 'react';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import './feed.css'
import Inputoptions from './inputop/Inputoptions';
import { CalendarViewDay, EventNote, Image, Subscriptions } from '@mui/icons-material';
import Post from './post/Post';

function Feed() {
  const [posts, setPosts] = useState([])
  const sendPost = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateTwoToneIcon/>
                <form>
                    <input type="text"/>
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed_iputOptions">
              <Inputoptions Icon={Image} title="Photo" color="#70B5F9"/>
              <Inputoptions Icon={Subscriptions} title ="Video" color="E7A33E"/>
              <Inputoptions Icon={EventNote} title="Event" color="#C0CBCD"/>
              <Inputoptions Icon={CalendarViewDay} title="WriteArticle" color="#7FC15E"/> 
            </div>
        </div>
        {posts.map(() => {
          return <Post/>
        })}
        <Post name="Arghadeep" description="Hi i am a React Developer" message="Wow finally i learned React"/>
    </div>
  )
}

export default Feed