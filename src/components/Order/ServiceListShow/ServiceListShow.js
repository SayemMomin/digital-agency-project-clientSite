import React from 'react';

const ServiceListShow = ({myServiceList}) => {
    console.log(myServiceList);
    
    return (
        <div>
            <div className="col-md-6 col-lg-4 text-white" >
                <div className="card m-2" style={{width: '18rem'}}>
                <div className="card-body bg-secondary m-1">
                <h5 className="card-title">Project Name: {myServiceList.project} </h5>
                <p className="card-text">Details: {myServiceList.details} </p>
                <p className="card-text">Price: ${myServiceList.price} </p>
                </div>
                </div>
            </div>    
        </div>
        
    );
};

export default ServiceListShow;