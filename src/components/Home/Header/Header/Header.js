import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import '../HeaderMain/HeaderMain.css'

const Header = () => {
    return (
        <div className="header-bg">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            
        </div>
    );
};

export default Header;