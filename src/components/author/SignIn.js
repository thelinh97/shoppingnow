import React, {useEffect, useRef, useState} from 'react';
import './author.css';
import { useAuth } from "../context/use-auth.js";
import { Link, Redirect } from 'react-router-dom';


function SigIn(props) {
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus()
  },[]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

 const handleSubmit = (e) => {
   e.preventDefault();
    auth.signin(email,password);
 }
 if(auth.user){ return <Redirect to='/inventory'/>}else{
    return (
        <div className="container">
  <div className="card card-container">
    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt=''/>
    <p id="profile-name" className="profile-name-card" />
    <form className="form-signin">
      <span id="reauth-email" className="reauth-email" />
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required ref={inputFocus} onChange={(e) => {setEmail(e.target.value)}} />
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
      {auth.errAuth !== null ? <p className='text-center text-danger'>Login fail!</p> : null}
      <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={(e)=>{handleSubmit(e)}}>Sign in</button>
    </form>
    <Link to="/" className="forgot-password">
      Forgot the password?
    </Link>
  </div>
</div>
    );
 }
}


export default SigIn;