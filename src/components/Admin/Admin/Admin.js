import React from 'react';
import AllServiceList from '../AllServiceList/AllServiceList';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';



const Admin = () => {
    return (
        <section className="container">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <SidebarCommon/>
                </div>
                <div className="col-md-9">
                    {/* <AllServiceListShow></AllServiceListShow> */}
                    <AllServiceList/>
                </div>
            </div>       
        </section>
    );
};

export default Admin;