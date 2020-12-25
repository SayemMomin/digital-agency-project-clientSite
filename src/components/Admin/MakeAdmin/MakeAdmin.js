import React from 'react';
import { useForm } from 'react-hook-form';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        
        fetch('https://ancient-stream-18565.herokuapp.com/makeAdmin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    };
    return (
        <section className="container">
        <div className="row justify-content-center">
            <div className="col-sm-3">
                <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-sm-9" style={{backgroundColor: "#f2f2f2"}}>          
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" className="form-control m-2" placeholder="Email" type="email" ref={register({ required: true })}/>             
                <input className="form-control m-2" type="submit" value="Make a Admin"/>
            </form>          
            </div>
        </div>
        </section>
    );
};

export default MakeAdmin;