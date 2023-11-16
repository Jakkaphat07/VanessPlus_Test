import React, { useState } from "react";
import { TextField, Button, Card, Alert } from "@mui/material";
import "../style/Signin.css";
import { Link,useNavigate,useLocation} from "react-router-dom";


function Signin() {
  const { state } = useLocation();
  const { userName, password, firstName, lastName, email } = state || {};
  const [userN, setUserN] = useState('');
  const [userP, setUserP] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsernameError(false);
    setPasswordError(false);

    if (userN === "") {
      setUsernameError(true);
    }
    if (userP === "") {
      setPasswordError(true);
    }

    if (userN  && userP ) {
      console.log(userN, userP);
      setUserN(userN);
      setUserP(userP);
      if(userN === userName && userP === password){
        navigate('/', { state: { firstName, lastName, email, userN, userP } });
      }
      if(userN !== userName && userP !== password){
        <Alert severity="error">Your username or password are not correct</Alert>
      }
    }
  };

  return (
    <div className="main">
      <Card className="card">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Signin</h2>
          <TextField
            label="Username"
            onChange={(e) => setUserN(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={userN}
            error={usernameError}
          />
          <TextField
            label="Password"
            onChange={(e) => setUserP(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={userP}
            error={passwordError}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button variant="outlined" color="secondary" type="submit">
            Login
          </Button>
        </form>
        <small>
          Create an account? <Link to="/signup">Signup here</Link>
        </small>
      </Card>
    </div>
  );
}

export default Signin;
