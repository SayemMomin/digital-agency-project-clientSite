import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';


const Order = () => {
    return (
        
            <section className="container">
           <div className="row justify-content-center">
                <div className="col-md-3">   
                
                <SidebarCommon></SidebarCommon>
                </div>
                <div className="col-md-9" style={{backgroundColor: "#f2f2f2"}}>
                    <OrderForm></OrderForm>
                </div>
           </div>
            </section>
        
    );
};

export default Order;