import React from 'react';
import Slider from "react-slick";
import image1 from '../../../images/h1_bg-1 (1).jpg'
import image2 from '../../../images/image.png'
import './Banner.css'

const fullbanner = {
  marginTop:'100px'
}
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <div className="fullbanner">
        <Slider {...settings}>
          <div>
          <div class="container">
  <div class="row">
    <div class="col-6">
      <h6 className="banner-upheading">
Natural beauty</h6>
<h1 className="banner-heading">Discover the most engaging places</h1>
<button type="button" class="btn btn-explore">Explore Now</button>
    </div>
    <div class="col-6">
      <img src={image1} className="img-fluid w-100"></img>
    </div>
    
  </div>
</div>
          </div>
          <div>
          <div class="container">
  <div class="row">
    <div class="col-5">
      <h1 className="banner-heading mt-5">Your jouney start here</h1>
      <p className="fs-5">Discover amazing places at exclusive deals</p>
      <button type="button" class="btn btn-explore">Explore Now</button>
    </div>
    <div class="col-7">
      <img src={image2} className="img-fluid w-100"></img>
    </div>
   
  </div>
</div>
          </div>
         
        </Slider> 
        </div>
    );
};

export default Banner;