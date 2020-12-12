import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import loader from '../../../images/loader.gif';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sleepy-ocean-40768.herokuapp.com/services' 
        )
        .then(res => res.json())
        .then(data => {
            setServices(data)
            //console.log(data);
        })
    }, [])
        
    return (
        <div className=" text-center mt-5 container">
             <h2>Provided Awesome <span className="text-success">Services</span> </h2>
            <div className="row d-flex justify-content-center mt-5">
           
            { services.length > 0 ?
                services.map(data => <Service service={data} key={data.title}></Service>)
              : <img src={loader} alt="" className="img-fluid w-50"  />
            }
        </div>
        </div>
    );
};

export default Services;