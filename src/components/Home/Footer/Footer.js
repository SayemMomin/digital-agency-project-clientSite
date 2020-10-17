import React from 'react';
import { useForm } from 'react-hook-form';

const Footer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        
        fetch('https://sleepy-ocean-40768.herokuapp.com/sendMassage', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })       
            if (data) {
                alert('Your Massage successfully Submited')
            } 
        
      };
    return (
        <div className="row mt-5 d-flex justify-content-center header-bg" styles={{height: '100px'}}>
            <div className="col-md-6 p-5">
                <h3>Let us handle your <br/> project, professionally. </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quod dolorum ad! Obcaecati, non dolor?</p>
            </div>
            <div className="col-md-6 p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control m-2" name="email" placeholder="Your Email" type="email" ref={register({ required: true })}/>
                    <input className="form-control m-2" name="name" placeholder="Your Company Name" id="exampleFormControlSelect2" type="text" ref={register({ required: true })}/>
                    <textarea className="form-control m-2" name="details" id="exampleFormControlTextarea1" placeholder="Write Details" style={{height: '200px'}} rows="3" ref={register({ required: true })}></textarea>
                    <button className="form-control m-2" type="submit">Send</button>
                </form>
            </div>
            <p className="text-center">Copyright@2020</p>
        </div>
    );
};

export default Footer;