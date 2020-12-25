import React, { useState, useContext, useEffect } from 'react';
import ServiceListShow from '../ServiceListShow/ServiceListShow';

import SidebarCommon from '../../SidebarCommon/SidebarCommon';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([]);
    const [userLoggedIn] = useContext(UserContext)

    useEffect(() => {
        fetch('https://ancient-stream-18565.herokuapp.com/myServiceList?email=' + userLoggedIn.email, 
        )
        .then(res => res.json())
        .then(data => {
            setServiceList(data)
            console.log(data);
        })
    }, [])
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-3">
                <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-md-9" >
            <div className="row d-flex flex-column justify-content-center bg-secondary pt-3">
            <h4>You have: {serviceList.length} Order</h4>
            {
                serviceList.map(list => <ServiceListShow myServiceList={list} key={list._id}></ServiceListShow>)
            }
        </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceList;