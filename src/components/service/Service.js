import React from 'react';
// import './Product.css';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';
import './Service.css'
const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, Location, price, description, img } = service;
    const url =`/servicess/${_id}`;
    return (
        <div>
           
  <div class="col">
    <div class="card h-100 card-bg">
      <img src={img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center">{name}</h5>
        <p class="card-text text-center">{description}</p>
        <h4 className="text-center">{price} Taka</h4>
      </div>
      <div class="card-footer">
          
        <Link to={`/services/${_id}`}>
        <button className="btn btn-primary bookbutton">Book now</button>
        </Link>
        
      
    </div>
  </div>
</div>
</div>


        
    );
};
export default Service;