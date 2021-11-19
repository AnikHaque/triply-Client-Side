import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import holiday1 from '../../images/h1_bg-2.jpg'
import './Holiday.css'

const Holiday = () => {
    return (
        <div className="holiday">
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={holiday1} className="img-fluid"></img>
        </Grid>
        <Grid item xs={12} md={6}>
         <h1 className="text-center about">Save an Extra $500 on Cyprus Holidays</h1>
         <p className="about-sub">It’s limited seating! Hurry up</p>
<button type="button" class="btn button-learn">View Details</button>
        </Grid>
        
      </Grid>
    </Box>
        </div>
    );
};

export default Holiday;