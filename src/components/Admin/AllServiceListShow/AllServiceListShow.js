import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../App';

const AllServiceListShow = ({allServiceList}) => {
    const [status, setStatus] = useState("");
    const [loding, setLoding] = useState(false);
    const [color, setColor] = useState("red");

    const handleChange = (event, id) => {
        fetch(`https://ancient-stream-18565.herokuapp.com/updateOrderStatus/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: event.target.value })

        }).then(res => {
            setLoding(loding)

        })
            .catch(err => {
                console.log(err);
            })
    }
  
    return (
        <section>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Details</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
            {
                  allServiceList.map((serviceList, index) =>
                        
                    <tr key={index}>   
                        <td>{index + 1}</td>
                        <td>{serviceList.name}</td>
                        <td>{serviceList.email}</td>
                        <td>{serviceList.project}</td>
                        <td>{serviceList.details}</td>
                        <td>
                        {
                                serviceList.status == "On Going" ? (
                                <select name="status" id="status" style={{ color: 'yellow',border:"none" }} onChange={(e) => handleChange(e, serviceList._id)} value={serviceList.status}>
                                <option value="pending">pending</option>
                                <option value="Done">Done</option>
                                <option value="On Going">On Going</option>
                                </select>
                                ) : (
                                    serviceList.status == "Done" ? (
                                <select name="status" id="status" style={{color: `green`,border:"none" }} onChange={(e) => handleChange(e, serviceList._id)} value={serviceList.status}>
                                <option value="pending">pending</option>
                                <option value="Done">Done</option>
                                <option value="On Going">On Going</option>
                                </select>
                                ) : ( <select name="status" id="status" style={{ color: 'red',border:"none" }} onChange={(e) => handleChange(e, serviceList._id)} value={serviceList.status}>
                                <option value="pending">pending</option>
                                <option value="Done">Done</option>
                                <option value="On Going">On Going</option>
                                </select>)
                                )
                            }   
                        </td>
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
        </section>
    );
};

export default AllServiceListShow;