import React from 'react';
import { Card, Container, Typography,Button } from '@mui/material';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import "../style/Home.css"

const Home = () => {
  const { state } = useLocation();
  const { firstName, lastName, email, userName} = state || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container >
      {userName? (
        <div className='home-main'>
          <Card className='personal'>
            <Typography variant="h4">{userName}</Typography>
            <Typography variant="h6">Personal Information</Typography>
            <Typography variant="body1">Firstname: {firstName}</Typography>
            <Typography variant="body1">Lastname: {lastName}</Typography>
            <Typography variant="body1">Email: {email}</Typography>
            <Button variant="outlined" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
          </Card>

        </div>
        
      ) : (
        <div className='home-main'>
          <Typography variant="h4">Welcome to the Home Page</Typography>
          <p>
            Please <Link to="/signup">Signup</Link> to view your personal information.
          </p>
        </div>
      )}
    </Container>
  );
};

export default Home;
