import React from 'react';
import logo from '../../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light header-bg">
            <a className="navbar-brand" href="#"><img className="img-fluid" style={{width: '100px'}} src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">Our PortFolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">Our Team</a>
                </li>               
                <li className="nav-item">
                    <button className="btn btn-secondary"><a className="nav-link" href="/login">Login</a></button>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;