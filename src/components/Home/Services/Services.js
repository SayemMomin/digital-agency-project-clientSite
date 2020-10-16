import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import servicesData from '../../../FackData/ServicesData/ServicesData';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:9000/services' 
        )
        .then(res => res.json())
        .then(data => {
            setServices(data)
            //console.log(data);
        })
    }, [])
        
    return (
        <div className=" text-center  mt-5">
             <h4>Provided Awesome <span className="text-success">Services</span> </h4>
            <div className="row d-flex justify-content-center">
           
            {
                services.map(data => <Service service={data} key={data.title}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;