import React from 'react';
import './Contact.css';
import Footer from '../footer/Footer'
const Contact = () => {
    return (
        <div>
           <div class="container-fluid contact-banner">
  <div class="row">
    <div class="col">
      <h1 className="text-center fw-bold contact-banner-text">Contact Us</h1>
    </div>
   
  </div>
</div> 

<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-sm-12 col-lg-7 col-md-7 contact-form">
    <div class="input-group">
  <input type="text" aria-label="First name" placeholder="Your Name"  class="form-control me-2 contact-input"></input>
  <input type="text" aria-label="Last name" placeholder="Your Email"  class="form-control me-3"></input>
</div>
<br></br>
<div class="input-group">
  <input type="text" aria-label="First name" placeholder="Your Phone"  class="form-control me-2 contact-input"></input>
  <input type="text" aria-label="Last name" placeholder="2+3=?"  class="form-control me-3"></input>
</div>
<br></br>
<label for="exampleFormControlTextarea1" className="form-label fw-bold fs-5">Please Send Your Meassage</label>
  <textarea className="form-control contact-textarea" id="exampleFormControlTextarea1" rows="4"></textarea>

  <button className="btn button-contact">Submit Now</button>

    </div>
    <div class="col-12 col-sm-12 col-lg-4 col-md-4">
    <h1 className="text-center contact-title">More Contact Info</h1>
    <div>
      <img src="https://img.freepik.com/free-photo/contact-us_36325-2135.jpg?size=626&ext=jpg" className="img-fluid contact-image"></img>
    </div>
    <div className="d-flex mx-5 ">
    <i class="fab fa-facebook fs-1 me-5 mb-2"></i>
    <br></br>
    <i class="fab fa-tumblr fs-1 me-5 mb-2"></i>
    <br></br>
    <i class="fab fa-whatsapp fs-1 me-5 mb-2"></i>
    <br></br>
    <i class="fab fa-instagram fs-1 me-5 mb-2"></i>
    <br></br>
    <i class="fab fa-twitter fs-1 me-5"></i>
    </div>
    
    </div>
   
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Contact;