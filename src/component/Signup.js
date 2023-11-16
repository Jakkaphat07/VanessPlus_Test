import React, { useState} from 'react';
import { TextField, Button, Stack, Card } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import '../style/Signup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, userName, password);
    
    navigate('/', { state: { firstName, lastName, email, userName } });
  }

  return (
    <div className="main">
      <Card className="card">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              label="Firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              required
            />
          </Stack>
          <TextField
            label="Email"
            type="email"
            sx={{ marginBottom: 4 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Username"
            type="text"
            sx={{ marginBottom: 4 }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            sx={{ marginBottom: 4 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />

          <Button type="submit">Register</Button>
        </form>
      </Card>
    </div>
  );
}

export default Signup;
