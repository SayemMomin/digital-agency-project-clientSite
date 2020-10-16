import React from 'react';

const AllServiceListShow = ({allServiceList}) => {
  
    console.log(allServiceList);
    
    

    return (
        <div>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
            {
                  allServiceList.map((serviceList, index) => 
                        
                    <tr>
                        
                        <td>{index + 1}</td>
                        <td>{serviceList.name}</td>
                        <td>{serviceList.email}</td>
                        <td>{serviceList.project}</td>
                        <td>{serviceList.details}KG</td>
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default AllServiceListShow;