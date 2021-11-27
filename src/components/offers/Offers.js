import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image1 from '../../images/h1_banner-1.jpg'
import image2 from '../../images/h1_banner-2.jpg'
import image3 from '../../images/h1_banner-3.jpg'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const offers = {
backgroundColor:'black',
paddingTop:'20px',
paddingBottom:'20px'
  }
 
  const offertitle = {
    marginTop:'150px',
    marginBottom:'40px',
    fontWeight: '900',
    color: 'black',
    fontSize: '55px'
  }

  const firstoffer = {
    marginLeft:'50px'
  }
  const btnview = {
    paddingLeft:'70px',
    paddingRight:'70px',
    marginLeft:'40px'
  }

const Offers = () => {
    return (
      <div>
        <h1 className="text-center fw-bold text-dark" style={offertitle}>Our Special Offers</h1>
        <div style={offers}>
            
           <Box sx={{ flexGrow: 1 }}>
             
      <Grid container spacing={2} style={firstoffer}>
        <Grid item xs={12} sm={12} md={4} sm={4}>
        <Card sx={{ maxWidth: 305  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Weekly
          Flash Deals
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Up to 30% off
          </Typography>
         
        </CardContent>
        <button className="btn btn-warning mb-3" style={btnview}>View Details</button>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sm={4}>
        <Card sx={{ maxWidth: 305 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Summer
Escapes
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Plan your next trip
          </Typography>
        </CardContent>
        <button className="btn btn-info mb-3" style={btnview}>Learn More</button>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sm={4}>
        <Card sx={{ maxWidth: 305 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Exclusive
Deals
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Want to save up to 50%
          </Typography>
        </CardContent>
        <button className="btn btn-secondary mb-3" style={btnview}>Subscribe Us</button>
      </CardActionArea>
    </Card>
        </Grid>
        
      </Grid>
    </Box>  
        </div>
        </div>
    );
};

export default Offers;