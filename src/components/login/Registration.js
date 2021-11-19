import { Container, Grid, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import login from '../../../images/login.jpg'
import { Link,useLocation,useHistory } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import './Login.css';
import useAuth from '../../hooks/useAuth';

const loginImage = {
    width:'700px'
}

const Register = () => {

const [loginData,setLoginData] = useState({})
 const {user,registerUser,isLoading}=useAuth()

// const location = useLocation();
// const history = useHistory();

 const handleOnChange = e => {
     const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
}

     const handleLoginSubmit = e => {
        if(loginData.password !=loginData.password2){
            alert('Your Password did not match');
            return

        }
     registerUser(loginData.email,loginData.password);
         e.preventDefault();
     }

    // const handleGoogleSignIn = () => {
    //     signInWithGoogle(useLocation,useHistory);
    // }
    return (
        <Container>
 <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
<h1 className="text-center fw-bold">Please Register</h1>
{
    user?.email && <Alert severity="success">Successfully Created The User!!!</Alert>

}
          </Typography>

 {
     !isLoading && <form onSubmit={handleLoginSubmit}  className="bg-primary text-white p-5 login"> 
     <TextField 
     sx={{width:'75%', m:1}}
     name="email"
     onChange={handleOnChange}
     id="standard-basic" 
     label="Your Email"
     
      variant="standard"
     />
     <TextField
     sx={{width:'75%', m:1}}
     name="password"
               id="standard-basic"
               label="Your Password"
               onChange={handleOnChange}
               type="password"
               variant="standard"
     />
     <TextField
         sx={{width:'75%', m:1}}
         name="password2"
                   id="standard-basic"
                   label="ReType Your Password"
                   onChange={handleOnChange}
                   type="password"
                   variant="standard"
         />
     <Button sx={{width:'75%', m:1}} variant="contained" type="submit">Login</Button>
     <Link style={{textDecoration:'none', marginLeft:'50px'}} to="/login">
     <Button variant="text" className="text-white">Already Registered??? Please Login</Button>
     </Link>
     </form>
 }
 {
    isLoading && <CircularProgress color="inherit" />

}


<p>.................................</p>
    
<Button  className="bg-info text-white px-5 pe-5 pt-3 pb-3">Sign In With Google</Button>
{/* {
    isLoading && <CircularProgress color="inherit" />

} */}
{/* {
    user?.email && <Alert severity="success">Successfully Logged In</Alert>

} */}
{/* {
    authError && <Alert severity="error">Login Failed!!!</Alert>


} */}

        </Grid>
        <Grid item xs={12} md={6}>
         <img src="https://www.kindpng.com/picc/m/273-2738804_php-login-and-authentication-login-hd-png-download.png" style={loginImage}></img> 
        </Grid>
        
        
      </Grid>
        </Container>
    );
};

export default Register;