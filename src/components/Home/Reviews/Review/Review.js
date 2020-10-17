import React from 'react';

const Review = ({review}) => {
    console.log(review)
    const{data} = review
    console.log(data);
    return (
        <div className=" d-flex justify-content-center col-md-6 col-lg-4">
            <div className="" style={{width: '22rem'}}>
            <div className="card m-2">
            <div className="card-body">
                <img className="img-fluid" style={{width: '60px', borderRadius: '50%'}} src={review.photo} alt=""/>
                <h5 className="card-title">{data.name} </h5>
                <h6 className="card-title">{data.designation} </h6>
                <p className="card-text">{data.review} </p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Review;