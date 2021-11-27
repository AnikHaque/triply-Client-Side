import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import imageme from '../../images/h1_shape-2.png'
import { Link } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const NotMember = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
        <img src={imageme} className="img-fluid w-50"></img>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <h1>Not a Member Yet?</h1>
          <p>Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
        <Link to="/login">
        <button>Sign In</button>
        </Link>
        <Link  to="/register">
        <button>Register</button>
        </Link>
        </Grid>
        
      </Grid>
    </Box> 
        </div>
    );
};

export default NotMember;