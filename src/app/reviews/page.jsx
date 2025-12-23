"use client"
import React, { useEffect, useState } from 'react';
import ReviewCard from '../../components/cards/ReviewCard';
import ReviewLoading from './ReviewLoading';

const ReviewsPage = () => {

const [reviews, setReviews]= useState([])
const [loading, setLoading]= useState(true)
useEffect( ()=>{
fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
.then(res=> res.json())
.then(data=>{
     setReviews(data.reviews)
     setLoading(false)
})

},[])
console.log(reviews.reviews)
if(loading){
    return <ReviewLoading></ReviewLoading>
}
    return (
        <div>
            <h3 className='text-center font-bold text-3xl'>Reviews</h3>
            <div>
                {
                    reviews.map(reviewData => <ReviewCard key={reviewData.id} reviewData={reviewData}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ReviewsPage;