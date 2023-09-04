import React from 'react'
import { useState, useEffect } from 'react';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import './feed.css'
import Inputoptions from './inputop/Inputoptions';
import { CalendarViewDay, EventNote, Image, Subscriptions } from '@mui/icons-material';
import Post from './post/Post';
import { db } from '../firebase/firebase.js';
import { collection, onSnapshot, orderBy, query, getFirestore } from "firebase/firestore";
import { addDoc } from 'firebase/firestore';


function Feed() {
  const [posts, setPosts] = useState([])
  const [input, setinput] = useState("")
  const data = collection(db, "posts");


  useEffect(() => {
    const q = query(data, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data()
        }
      }))
    })
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    //add a new post to the database according to he firebase version 10.3.0
    const payload = {
      name: "Arghadeep",
      description: "React Developer",
      message: input,
      photoUrl: "",
      timestamp: new Date()
    }
    addDoc(data, payload);
  }
  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateTwoToneIcon />
          <form>
            <input value={input} onChange={(e) => setinput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_iputOptions">
          <Inputoptions Icon={Image} title="Photo" color="#70B5F9" />
          <Inputoptions Icon={Subscriptions} title="Video" color="E7A33E" />
          <Inputoptions Icon={EventNote} title="Event" color="#C0CBCD" />
          <Inputoptions Icon={CalendarViewDay} title="WriteArticle" color="#7FC15E" />
        </div>
      </div>
      {posts.map(({
        id, data: { name, description, message, photoUrl }
      }) =>
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />)}
      <Post name="Arghadeep" description="Hi i am a React Developer" message="Wow finally i learned React" />
    </div>
  )
}

export default Feed;