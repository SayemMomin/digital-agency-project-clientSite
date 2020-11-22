import React, { useContext } from 'react';
import OrderForm from '../OrderForm/OrderForm';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';


const Order = () => {
    return (
        <div className=" mt-2">
            <div className="row justify-content-center">
            <div className="col-md-3">   
                
            <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-md-6">
                <OrderForm></OrderForm>
            </div>
            </div>
        </div>
    );
};

export default Order;