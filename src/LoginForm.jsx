// LoginForm.js
import React, { useState } from 'react';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(username, password);
  };

  return (
    <div className='wrapper'>
           <div class="title"><span>Login Form</span></div>
        <form onSubmit={handleSubmit}>
          <div className='row'>
              <label>Username: <input type="text" value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </label>
          </div>
          <br /><br />
          <div className='row'>
              <label>
                Password: 
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </label>
          </div>
          <br /><br />
          <div className="row button"><button type="submit">Login</button></div>
        </form>
    </div>
  );
}

export default LoginForm;