import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed.js';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './login/Login.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      onAuthStateChanged(auth,(userAuth)=>{
        if (userAuth) {
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        } else {
          dispatch(logout())
        }
      })
  }, []
  )

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* {Widgets} */}
        </div>)
      }
    </div>
  );
}

export default App;
