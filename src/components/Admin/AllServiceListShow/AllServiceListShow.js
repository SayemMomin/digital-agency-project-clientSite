import React from 'react';

const AllServiceListShow = ({allServiceList}) => {
  
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
                        <div className="d-flex">
                        <div className="dropdown mr-1">
                            <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                            Position
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <p className="dropdown-item text-danger" style={{cursor: 'pointer'}}>Pending</p>
                            <p className="dropdown-item text-warning" style={{cursor: 'pointer'}} >On Going</p>
                            <p className="dropdown-item text-success" style={{cursor: 'pointer'}} >Done</p>
                            </div>
                        </div>
                        </div>
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