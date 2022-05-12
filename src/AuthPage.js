import React, { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils.js';

export default function AuthPage({ setEmail, setToken }) {
  // you'll need to track the form state of the email and password for sign in, and separate state for sign up
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [{ 
    email: signInEmail, 
    password: signInPassword,
  }, setSignInFormData] = useState({
    email: '',
    password: ''
  });

  async function handleSignIn(e) {
    e.preventDefault();
      
    // sign the user in using the form state
    await signIn(signInEmail, signInPassword);

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    const { 
      access_token, 
      user: { 
        email,
      } 
    } = getUser();

    setEmail(email);
    setToken(access_token);
  
  }
    
  async function handleSignUp(e) {
    e.preventDefault();
    // sign the user up using the form state

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      {/* on submit, sign the user up using the function defined above */}
      <form>
        <label>
            Email
          {/* on change, update the form state for email */}
          <input required type="email" name="email" />
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required type="password" name="password" />
        </label>
        <button>Sign Up</button>
      </form>
      {/* on submit, sign the user in using the function defined above */}
      <form>
        <label>
            Email
          {/* on change, update the form state for email */}
          <input required type="email" name="email" />
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required type="password" name="password" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
