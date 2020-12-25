import React, { useEffect, useState } from 'react';
import AllServiceListShow from '../AllServiceListShow/AllServiceListShow';
import loader from '../../../images/loader.gif';

const AllServiceList = () => {
    const [allServiceList, setAllServiceList] = useState([])
    useEffect(() => {
        fetch('https://ancient-stream-18565.herokuapp.com/allOrderList' 
        )
        .then(res => res.json())
        .then(data => {
            setAllServiceList(data)
            console.log(data);
        })
    }, [])
    return (
        <div >
            
            {
                allServiceList.length > 0 ?
                <AllServiceListShow allServiceList={allServiceList}></AllServiceListShow>
                : <img src={loader} alt=""className="img-fluid" style={{margin: "auto"}} />
            }
           
        </div>
        
    );
};

export default AllServiceList;