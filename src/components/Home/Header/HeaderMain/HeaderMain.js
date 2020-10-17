import React from 'react';
import headerImg from '../../../../images/logos/headerImg.png';
import './HeaderMain.css'
import { Link, useHistory } from 'react-router-dom';

const HeaderMain = () => {
    let history = useHistory();
    const handleClick = () => {
        let path = `order`; 
        history.push(path);
        //console.log('click')
      }
    return (
        <header className="row d-flex justify-content-center m-2 ">
            <section className="col-md-4">
                <h3>Let's Grow Your <br/>Brand To The <br/> Next Level</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus eius atque totam mollitia obcaecati, qui exercitationem ut dolor adipisci.</p>
                <button type="button" onClick={handleClick} className="btn btn-primary my-2">Find Us</button>
            </section>
            <section className="col-md-6 ml-3">
                <img className="img-fluid" src={headerImg} alt=""/>
            </section>
            
        </header>
    );
};

export default HeaderMain;