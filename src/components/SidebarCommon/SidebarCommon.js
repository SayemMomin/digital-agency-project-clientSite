import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBoxes, faDotCircle, faUserPlus, faCartPlus, faPlus, faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const SidebarCommon = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://sleepy-ocean-40768.herokuapp.com/isAdmin', {
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
        <div className="d-flex flex-column bg-dark justify-content-between py-5 px-4" style={{height:"100vh"}}>         
        <nav className="">
            <ul className="list-unstyled">
                <li>
                    <Link to="/order">
                        <FontAwesomeIcon className="mr-2" icon={faCartPlus} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/order/myServiceList">
                        <FontAwesomeIcon className="mr-2" icon={faBoxes} /> <span>Service List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/order/reviewSubmit">
                        <FontAwesomeIcon className="mr-2" icon={faDotCircle} /> <span>Review</span> 
                    </Link>
                </li>
                { isAdmin && <div>
                    <li>
                    <Link to="/admin">
                        <FontAwesomeIcon className="mr-2" icon={faBoxes} /> <span className="text-white">All Service List</span> 
                    </Link>
                </li>
                <li className="White link">
                    <Link to="/admin/addService">
                        <FontAwesomeIcon className="mr-2" icon={faPlus} /> <span className="text-white">Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/admin/makeAdmin">
                        <FontAwesomeIcon className="mr-2" icon={faUserPlus} /> <span className="text-white">Make Admin</span> 
                    </Link>
                </li>
                </div>
                    
                }
            </ul>
            </nav>
            <div>
                    <Link to="/">
                        <FontAwesomeIcon icon={faBackspace} /> <span>Log Out</span> 
                    </Link>
            </div>
            
        </div>
    );
};

export default SidebarCommon;