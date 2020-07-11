import React, {useEffect, useRef, useState} from 'react';
import './author.css';
import { useAuth } from "../context/use-auth.js";

function SigUp(props) {
  const inputFocus = useRef(null);
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain,setPasswordAgain] = useState('')
  const [signupErr, setSignupErr] = useState(auth.errAuth);

  useEffect(() => {
    inputFocus.current.focus()
  },[]);

  useEffect(() => {
    setSignupErr(auth.errAuth)
  },[auth.errAuth]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signup(email,password,passwordAgain)
    }
  
console.log(signupErr)
    return (
        <div className="container">
  <div className="card card-container">
    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt='' />
    <p id="profile-name" className="profile-name-card" />
    <form className="form-signin">
      <span id="reauth-email" className="reauth-email" />
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required ref={inputFocus}
       onChange={(e)=> setEmail(e.target.value)}/>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
      onChange={(e)=>{ setPassword(e.target.value)}} />
      <input type="password" id="inputPassword" className="form-control" placeholder="Password again" required
      onChange={(e)=>{ setPasswordAgain(e.target.value)}} />
      <p className ='text-center'>{signupErr ? signupErr : null}</p>
      <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={(e)=>{handleSubmit(e)}}>Sign up</button>
    </form>
  </div>
</div>
    );
}
    
export default SigUp;