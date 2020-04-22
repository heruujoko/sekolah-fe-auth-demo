import React, { useState } from 'react';
import axios from '../services/axios';
import localStorage from 'localStorage';

const Signin = () => {
  const [email, setEmail] = useState('heru@subeee.com');
  const [password, setPassword] = useState('Test123)');
  const [user, setUser] = useState(null);

  const onLogin = async () => {
    try {
      const resp = await axios.post('/external/users/signin', {
        email,
        password
      });

      let token = resp.data.token;
      localStorage.setItem('LOGIN_TOKEN', token);
    } catch (err) {
      console.log(err);
    }
  }

  const getUser = async () => {
    const resp = await axios.get('/main/users/profile')
    setUser(resp.data);
  }

  return (
    <div>
      <h1>Halaman Login</h1>

      <input value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

      <button class="btn btn-primary" onClick={onLogin}>Login</button>

      <br />
      <br />
      <br />

      <button onClick={getUser} class="btn btn-success">Get user</button>
      <br />
      { JSON.stringify(user) }
    </div>
  )
}

export default Signin;
