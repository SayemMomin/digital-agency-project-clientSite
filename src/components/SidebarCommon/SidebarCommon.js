import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBoxes, faDotCircle, faUserPlus, faCartPlus, faPlus, faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';



const SidebarCommon = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://ancient-stream-18565.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userLoggedIn.email })
        })
         .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
                console.log(data);
            });
    }, [])
    return (
        <div style={{backgroundColor: "#f2f2f2"}}>
            <img src={logo} className="fluid w-75 m-4" alt=""/>
            <h5 className="text-secondary px-4">Welcome {userLoggedIn.name}</h5>
            <div className="d-flex flex-column  justify-content-between py-5 px-4 " >         

            <nav>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/dashboard/order">
                            <FontAwesomeIcon className="mr-2" icon={faCartPlus} /> <span>Order</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/myServiceList">
                            <FontAwesomeIcon className="mr-2" icon={faBoxes} /> <span>Service List</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/reviewSubmit">
                            <FontAwesomeIcon className="mr-2" icon={faDotCircle} /> <span>Review</span> 
                        </Link>
                    </li>
                    { isAdmin && <div>
                        <li>
                        <Link to="/dashboard/admin">
                            <FontAwesomeIcon className="mr-1" icon={faBoxes} /> <span className="text-success">All Service List</span> 
                        </Link>
                    </li>
                    <li className="success link">
                        <Link to="/dashboard/addService">
                            <FontAwesomeIcon className="mr-2" icon={faPlus} /> <span className="text-success">Add Service</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/makeAdmin">
                            <FontAwesomeIcon icon={faUserPlus} /> <span className="text-success">Make Admin</span> 
                        </Link>
                    </li>
                    </div>
                        
                    }
                </ul>
                </nav>
                <div className="mt-5">
                        <Link to="/">
                            <FontAwesomeIcon icon={faBackspace} /> <span>Log Out</span> 
                        </Link>
                </div>
                
            </div>
        </div>
    );
};

export default SidebarCommon;