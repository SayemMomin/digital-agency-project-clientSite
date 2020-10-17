import React, { useEffect, useState } from 'react';
import AllServiceListShow from '../AllServiceListShow/AllServiceListShow';

const AllServiceList = () => {
    const [allServiceList, setAllServiceList] = useState([])
    useEffect(() => {
        fetch('https://sleepy-ocean-40768.herokuapp.com/allOrderServiceList' 
        )
        .then(res => res.json())
        .then(data => {
            setAllServiceList(data)
            console.log(data);
        })
    }, [])
    return (
        <div >
        
            <AllServiceListShow allServiceList={allServiceList}></AllServiceListShow>
           
        </div>
        
    );
};

export default AllServiceList;