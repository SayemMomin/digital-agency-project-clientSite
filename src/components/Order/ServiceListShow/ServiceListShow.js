import React from 'react';

const ServiceListShow = ({myServiceList}) => {
    console.log(myServiceList);
    
    return (
        <div>
            <section className="col-md-6 col-lg-4">
                <div className="card m-2" style={{width: '18rem'}}>
                <div className="card-body text-center m-1">
                    <img src={myServiceList.img} alt=""className="img-fluid w-50" />
                <h5 className="card-title">Project Name: {myServiceList.project} </h5>
                <p className="card-text">Details: {myServiceList.details} </p>
                <p className="card-text">Price: ${myServiceList.price} </p>
                </div>
                </div>
            </section>    
        </div>
        
    );
};

export default ServiceListShow;