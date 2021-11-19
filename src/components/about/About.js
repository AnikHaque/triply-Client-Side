import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import About1 from '../../images/about.png'
import './About.css'

const About = () => {
    return (
        <div className="about1">
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={About1}></img>
        </Grid>
        <Grid item xs={12} md={6}>
         <h1 className="text-center about">We Help You Planning Your Journey</h1>
         <p className="about-sub">Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<button type="button" class="btn button-learn">Learn More</button>
        </Grid>
        
      </Grid>
    </Box>
        </div>
    );
};

export default About;