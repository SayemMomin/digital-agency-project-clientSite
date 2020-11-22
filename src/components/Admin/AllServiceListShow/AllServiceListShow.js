import React, { useState } from 'react';

const AllServiceListShow = ({allServiceList}) => {
    const [status, setStatus] = useState("");
    const [loding, setLoding] = useState(false);
    const [color, setColor] = useState("red");
    const [allServiceListStatus, setAllServiceListStatus] = useState([])
    const handleChange = (event, id) => {

        setAllServiceListStatus([])

        fetch(`https://sleepy-ocean-40768.herokuapp.com/updateOrderStatus/${id}`, {
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
                                allServiceListStatus.status == "On Going" ? (
                                <select name="status" id="status" style={{ color: 'yellow',border:"none" }} onChange={(e) => handleChange(e, allServiceListStatus._id)} value={allServiceListStatus.status}>
                                <option value="pending">pending</option>
                                <option value="Done">Done</option>
                                <option value="On Going">On Going</option>
                                </select>
                                ) : (
                                    allServiceListStatus.status == "Done" ? (
                                <select name="status" id="status" style={{color: `green`,border:"none" }} onChange={(e) => handleChange(e, allServiceListStatus._id)} value={allServiceListStatus.status}>
                                <option value="pending">pending</option>
                                <option value="Done">Done</option>
                                <option value="On Going">On Going</option>
                                </select>
                                ) : ( <select name="status" id="status" style={{ color: 'red',border:"none" }} onChange={(e) => handleChange(e, allServiceListStatus._id)} value={allServiceListStatus.status}>
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