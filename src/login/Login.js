import { useState, React } from 'react'
import './login.css'
import { auth } from '../firebase/firebase.js'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import login from '../features/counter/userSlice';


function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [profilePic, setprofilePic] = useState('');
  const dispatch = useDispatch();

  //register user
  const registerUser = () => {
    console.log("Registered");
    if (!Name) {
      return alert("Please enter a full name");
    }
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user,{
          displayName: Name,
          photoURL: profilePic
        }).then(() => {
          dispatch(login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: Name,
            photoURL: profilePic
          }))
        })
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
      });
  }
  //login user
  const loginUser = (e) => {
    e.preventDefault();
    console.log("Logged In");
  }
  return (
    <div className='login'>
      <img className='img' src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png" alt="" />
      <form action="">
        <input value={Name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' type="text" />
        <input value={profilePic} onChange={(e) => setprofilePic(e.target.value)} placeholder='Profile pic url' type="text" />
        <input value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="text" />
        <input value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" />
        <button onClick={loginUser} className='btn'>Sign In</button>
      </form>
      <p>Not a member?
        <span className='login_register' onClick={registerUser}>Sign up</span>
      </p>
    </div>
  )
}

export default Login;