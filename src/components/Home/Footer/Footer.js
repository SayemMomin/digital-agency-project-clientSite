import React from 'react';
import { useForm } from 'react-hook-form';
import './Footer.css'

const Footer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        
        fetch('https://ancient-stream-18565.herokuapp.com/sendMassage', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })       
            if (data) {
                alert('Your Massage successfully Submited')
            } 
        
      };
    return (
        <div className="bg-footer">
        <footer className=" mt-5">
            <section className="container">
             <div className="row pt-5">
             <div className="col-md-6">
               <h2>Let us handle your <br/> project, professionally. </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quod dolorum ad! Obcaecati, non dolor?</p>
               </div>
               <div className="col-md-6">
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mt-2" name="email" placeholder="Your Email" type="email" ref={register({ required: true })}/>
                    <input className="form-control mt-2" name="name" placeholder="Your Company Name" id="exampleFormControlSelect2" type="text" ref={register({ required: true })}/>
                    <textarea className="form-control mt-2" name="details" id="exampleFormControlTextarea1" placeholder="Write Details" style={{height: '200px'}} rows="3" ref={register({ required: true })}></textarea>
                    <button className="form-control mt-2" type="submit">Send</button>
                </form>
               </div>
             </div>
            </section>
            <p className="text-center pt-5">Copyright@2020</p>
        </footer>
        </div>
    );
};

export default Footer;