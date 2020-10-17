import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';

const OrderReview = () => {
  const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
    console.log(data)
    
    const reviewData = {...userLoggedIn, data}
    fetch('https://sleepy-ocean-40768.herokuapp.com/addReview', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reviewData)
    })       
        if (data) {
            alert('Your Review successfully Submited')
        } 
    
  };
    return (
        <div className="row container d-flex justify-content-center">
            <div className="col-sm-3">
                <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-sm-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="name" className="form-control m-2" placeholder="Your Name" type="text" ref={register({ required: true })}/>
              <input name="designation" className="form-control m-2" placeholder="Your designation" id="exampleFormControlSelect2" type="text" ref={register({ required: true })}/>
              <textarea name="review" className="form-control m-2" placeholder="Write your review" id="exampleFormControlTextarea1" style={{height: '200px'}} rows="3" ref={register({ required: true })}></textarea>
              <input className="form-control m-2" type="submit" value="Submit Your Review"/>
              </form>
            </div>
        </div>
    );
};

export default OrderReview;