import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography
} from '@mui/material';
// import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './ServiceDetail.css';
import useAuth from '../../hooks/useAuth';


const productdetailsImage = {
    width:'400px',
    marginLeft:'70px',
    marginBottom:'10px'
}


const ServiceDetail = () => {
     const {user} = useAuth();
     const {id} = useParams();
    const [service,setService] = useState({})
    useEffect(()=>{
        fetch(`https://rocky-hamlet-39429.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data))

    },[])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        data.status="pending";
        console.log(data);
         axios.post("https://rocky-hamlet-39429.herokuapp.com/orders",data)
         .then(res=>{
             if(res.data.insertedId){
                 alert("Added Successfully");
                 reset();
                
             }
         })
    } 
    return (
        <div> 
            <div className="product-detail mt-3 mb-5"></div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
            <Typography>
            
          <img style={productdetailsImage} src={service?.img}></img>
          <h4 className="text-center">{service.name}</h4>
          <p className="text-center">{service.description}</p>
          <h2 className="text-center">Price: {service.price} Taka</h2>
          </Typography>
        </Grid>
         <Grid item xs={7}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
       <input {...register("name", { required: true, maxLength: 500 })} placeholder="Tour Place Name"/> 
<br></br>
<br></br>
       <input {...register("location", { required: true, maxLength: 500 })} placeholder="Tour Place Location"/> 
      <br></br>
      <br></br>
      <input {...register("Email", { required: true, maxLength: 500 })} placeholder="Email" defaultValue={user.email}/>
<br></br>
<br></br>
      <input {...register("name1", { required: true, maxLength: 500 })} placeholder="Booked By"/>
      <br></br>
      <br></br>
        
      <input type="number" {...register("price")}placeholder="Total Cost"/>
      <br></br>
      <br></br>
      <input type="number" {...register("price1")}placeholder="Book for how many days?"/>
      <br></br>
      <br></br>
      
      <input {...register("img")} placeholder="Tour Place image url"/>
      <br></br>
      <br></br>
      
      <input type="submit" value="Place Order" />
    </form>



        </Grid>  
      </Grid>
    </Box>
   
</div>
    );
};

export default ServiceDetail;