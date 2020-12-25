import React from 'react';
import headerImg from '../../../../images/logos/headerImg.png';
import './HeaderMain.css'
import { Link, useHistory } from 'react-router-dom';

const HeaderMain = () => {
    let history = useHistory();
    const handleClick = () => {
        let path = `/dashboard/order`; 
        history.push(path);
        //console.log('click')
      }
    return (
        <main className="container headermain pl-4">
            <section  className="row">
                <div className="col-md-4 pr-0">
                <h1>Let's Grow <br/> Your Brand To <br/> The Next Level</h1>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus eius atque totam mollitia obcaecati, qui exercitationem ut dolor adipisci.</p>
                <button type="button" onClick={handleClick} className="btn btn-primary my-2">Find Us</button>
                </div>
               <div className="col-md-6 ml-auto">
               <img className="img-fluid" src={headerImg} alt=""/>
               </div>
            </section>
            
        </main>
    );
};

export default HeaderMain;