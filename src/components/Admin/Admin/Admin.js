import React from 'react';
import AllServiceList from '../AllServiceList/AllServiceList';
import logo from '../../../images/logos/logo.png';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';
import AllServiceListShow from '../AllServiceListShow/AllServiceListShow';


const Admin = () => {
    return (
        <div>
            <div className="row container d-flex justify-content-center">
            <div className="col-md-3">
                <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-md-9">
                {/* <AllServiceList></AllServiceList> */}
                <AllServiceListShow></AllServiceListShow>
            </div>
        </div>       
        </div>
    );
};

export default Admin;