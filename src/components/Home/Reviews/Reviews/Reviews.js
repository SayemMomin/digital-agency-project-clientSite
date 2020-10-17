import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';
import reviewsData from '../../../../FackData/ReviewsData/ReviewsData';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://sleepy-ocean-40768.herokuapp.com/reviews' 
        )
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            console.log(data);
        })
    }, [])
    return (
        <div className=" text-center  mt-5">
             <h4>Client's <span className="text-success">FeedBack</span> </h4>
            <div className="row d-flex justify-content-center">
                {
                   reviews.map(data => <Review review={data} key={data._id}></Review>) 
                }
            </div>
        </div>
    );
};

export default Reviews;