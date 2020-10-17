import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';


const Order = () => {
    return (
        <div className="row container d-flex justify-content-center">
            <div className="col-sm-3">       
            <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-sm-6">
                <OrderForm></OrderForm>
            </div>
        </div>
    );
};

export default Order;