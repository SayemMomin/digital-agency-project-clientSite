import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';

const OrderReview = () => {
  const [userLoggedIn, setUserLoggedIn] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
    console.log(data)
    
    const reviewData = {data}
    fetch('https://ancient-stream-18565.herokuapp.com/addReview', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reviewData)
    })       
        if (data) {
            alert('Your Review successfully Submited')
        } 
    
  };
    return (
        <section className="container">
            <div className="row justify-content-center">
            <div className="col-md-3">
                <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-md-9" style={{backgroundColor: "#f2f2f2"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="name" className="form-control m-2" placeholder="Your Name" type="text" ref={register({ required: true })}/>
              <input name="email" className="form-control m-2" placeholder="Your Email" defaultValue={userLoggedIn.email} disabled type="email" ref={register({ required: true })}/>
              <input name="designation" className="form-control m-2" placeholder="Your designation"  type="text" ref={register({ required: true })}/>
              <textarea name="review" className="form-control m-2" placeholder="Write your review"  style={{height: '200px'}} rows="3" ref={register({ required: true })}></textarea>
              <input className="form-control m-2" type="submit" value="Submit Your Review"/>
              </form>
            </div>
            </div>
        </section>
    );
};

export default OrderReview;