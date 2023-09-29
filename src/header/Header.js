import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './header.css'
import logo from '../images/linkedin-logo.png'
import Headeroption from './headerOptions/Headeroption.js';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';
import { BusinessCenter, Chat } from '@mui/icons-material';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import man from '../images/man.png'
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { logout } from '../features/counter/userSlice';
import { auth } from '../firebase/firebase';



function Header() {
  const dispatch = useDispatch();
  
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className="header">
      {/* <h1>Header Component</h1> */}
      <div className="header_left">
        <img src={logo} alt="" />
        <div className="header_search">
          <SearchIcon />
          <input placeholder='Search' type="text"/>
        </div>
      </div>
      <div className="header_right">
        <Headeroption Icon={HomeIcon} title="Home"/>
        <Headeroption Icon={SupervisorAccountTwoToneIcon} title="My Network"/>
        <Headeroption Icon={BusinessCenter} title="Jobs"/>
        <Headeroption Icon={Chat} title="Messaging"/>
        <Headeroption Icon={NotificationsNoneTwoToneIcon} title="Notifications"/>
        <Headeroption avatar={man} title="Profile" onClick={logoutApp}/>
      </div>
    </div>
  )
}

export default Header