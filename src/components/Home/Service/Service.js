import React from 'react';
import './Service.css'
import { useHistory } from 'react-router-dom';


const Service = ({service}) => {
    const{image} = service
    const history = useHistory();
    const orderHandle = () => {
        history.push('/order')
    //     console.log('order click');
     }
     
    return (
        <div onClick={orderHandle} className="col-md-6 col-lg-4 card-focus">
            <div className="" style={{width: '22rem'}}>
            <div className="card-body ">
                {
                    service.image ? <img style={{width: "60px"}} className="img-fluid" src={`data:image/png;base64,${service.image.img}`} alt=""/> 
                    : <img style={{width: "60px"}} className="img-fluid" src={`http://localhost:9000/${service.img}`} alt=""/> 
                } <br/>
                <h5 className="card-title">{service.title} </h5>
                <p className="card-text">{service.description} </p>
            </div>
            </div>
        </div>
    );
};

export default Service;