import React, { useState, useContext } from 'react';
import './Login.css'
import firebaseConfig from './firebase.confiq';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
var firebase = require('firebase/app');
require('firebase/auth');


firebase.initializeApp(firebaseConfig);

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''
      })

      const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    
      const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((res) => {
          const {displayName, email, photoURL} = res.user
            const userSignIn ={
              isSignIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            setUser(userSignIn)
            setUserLoggedIn(userSignIn)
            history.replace(from);
            console.log('email ok')
        })
    }
    return (
        <div className="">
           <img src={logo} className="center mt-5" alt="logo"/> <br/>
          <div className="d-flex justify-content-center form">
            <button onClick={handleGoogleSignIn}><FontAwesomeIcon className="text-primary" icon={faGoogle}/> Login with Google</button>
          </div>
        </div>
    );
};

export default Login;