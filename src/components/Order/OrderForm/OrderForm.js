import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const OrderForm = () => {
    // const [loggedInUser, setLoggedInUser] =useContext(UserContext)
const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log('form submitted', data)
    //const selectedService = {data}
    //setOrder(orderDetails) 
    fetch('http://localhost:9000/addOrder', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })       
        if (data) {
            alert('Your Order successfully')
        }      
  }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" className="form-control m-2" placeholder="Your Name" type="text" ref={register({ required: true })}/>
                    <input name="email" className="form-control m-2" placeholder="Your Email" id="exampleFormControlSelect2" type="text" ref={register({ required: true })}/>
                    <input name="project" className="form-control m-2" placeholder="Your Project; i.e: Graphic Design" type="text" ref={register({ required: true })}/>
                    <textarea name="details" className="form-control m-2" placeholder="Your details" id="exampleFormControlTextarea1" style={{height: '200px'}} rows="3" ref={register({ required: true })}></textarea>
                    <input className="form-control m-2" type="number" placeholder="Price" name="price" id="" ref={register({ required: true })}/>
                    <input className="form-control bg-primary m-2" type="submit" value="Order"/>
            </form>          
        </div>
    );
};

export default OrderForm;