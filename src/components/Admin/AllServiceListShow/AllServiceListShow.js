import React from 'react';

const AllServiceListShow = ({allServiceList}) => {

    const handleChange = (event, id) => {
        fetch(`https://ancient-stream-18565.herokuapp.com/updateOrderStatus/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: event.target.value })

        })
        .then(res => {
            window.alert("Status update successfully")

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
                           <select className="border-0" onChange={(e) => handleChange(e, serviceList._id)} defaltValue={serviceList.status}>
                                    <option value="Panding">Panding</option>
                                    <option value="On going">On going</option>
                                    <option value="Done">Done</option>
                                </select>
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