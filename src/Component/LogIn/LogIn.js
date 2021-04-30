import React, { useContext, useState } from 'react';
import {Button} from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';


const LogIn = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            console.log(result.user);
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            console.log(signedInUser);
            console.log(setLoggedInUser);
            history.replace(from);
          })
          .catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        }
    const { register, handleSubmit, watch, errors } = useForm()
    const [newUser, setNewUser] = useState(false);
 
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    message: false,
  })
 
  const onSubmit = data => {
    setUser(data);
 
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user);
          const newUser = { ...user };
          newUser.message = true;
          newUser.error = '';
          setUser(newUser)
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.message = false;
          newUser.error = error.message;
          setUser(newUser)
        });
    }
 
    if (!newUser && user.email && user.password) {
 
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
 
          const newUser = { ...user };
          newUser.message = true;
          newUser.error = '';
          setUser(newUser)
         
          setLoggedInUser(newUser)
          history.replace(from)
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUser = { ...user };
          newUser.message = false;
          newUser.error = errorMessage;
          setUser(newUser)
        });
    }
  };
 
  
 
  return (
    <>
    {/* <Header></Header> */}
    <div className="container App bg-light">
      <h1>This is Login form</h1>
 
      <input onClick={() => setNewUser(!newUser)} type="checkbox" name="newUser" id="" />
      <label htmlFor="newUser">Register</label>
 
      <form className="formStyle" onBlur={handleSubmit(onSubmit)}>
 
        {newUser && <input name="name" ref={register({ required: true, })} placeholder="Name" />} <br />
 
        {errors.name && <span className="error">Name field is required</span>}<br />
 
        <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="email" /><br />
 
        {errors.email && <span className="error">Email field is required</span>}<br />
 
        <input type="password" name="password" ref={register({ required: true, pattern: /\d{1}/ })} placeholder="Password" /><br />
 
        {errors.password && <span style={{ color: 'red' }}>Minimum 1 number field is required</span>}<br />
 
        <input onClick={handleSubmit(onSubmit)} type="submit" value={newUser ? 'Sign-up' : 'Sign-in'} />
      </form>
 
      <p>{user.name}</p>
      <p>{user.error}</p>
 
      {
        user.message && <p> User {newUser ? 'created' : 'logged in'} successfully </p>
      }
      <Button onClick={handleGoogleSignIn}>Google Sign in</Button>
    </div>
    </>
  );
};

export default LogIn;