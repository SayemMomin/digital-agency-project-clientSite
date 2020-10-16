import React, { useState, useContext, useEffect } from 'react';
import ServiceListShow from '../ServiceListShow/ServiceListShow';
import { UserContext } from '../../../App';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([])
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)

    

    useEffect(() => {
        fetch('http://localhost:9000/myServiceList?email='+ loggedInUser.email, 
        )
        .then(res => res.json())
        .then(data => {
            setServiceList(data)
            console.log(data);
        })
    }, [])
    return (
        <div className="row container d-flex justify-content-center">
            <div className="col-sm-3">
                <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-sm-6">
            <div className="row d-flex justify-content-center">
            <h4>You have: {serviceList.length} Order</h4>
            {
                serviceList.map(list => <ServiceListShow myServiceList={list} key={list._id}></ServiceListShow>)
            }
        </div>
            </div>
        </div>
    );
};

export default ServiceList;