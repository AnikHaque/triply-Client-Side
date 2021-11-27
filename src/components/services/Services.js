import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
// import './Explore.css'
import './Services.css'



const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h1 className="fw-bold mt-2 text-center mb-5">Our Services</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;