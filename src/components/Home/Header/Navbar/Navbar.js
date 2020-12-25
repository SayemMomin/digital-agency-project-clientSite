import React from 'react';
import logo from '../../../../images/logos/logo.png';
import './Navbar.css'


const Navbar = () => {
    return (
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img className="" style={{width: '200px'}} src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className="navbar-nav ml-auto justify-content-center  ">
                  
                        <a className="nav-link mr-5 text-dark nav-style" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-link mr-5 text-dark nav-style" href="/home">Our PortFolio</a>
                        <a className="nav-link mr-5 text-dark nav-style" href="/home">Our Team</a>
                        <a className="nav-link mr-5 text-dark nav-style" href="/home">Contact us</a>
                        <a className=" login-btn" href="/login">Login</a>
                    
                    </div>
                </div>
                </nav>
              
            </header>
      
    );
};

export default Navbar;