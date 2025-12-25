import React from 'react';
import ReviewsPage from './ReviewPage';

export const metadata = {
    // title:'All Reviews',
    title:{
        absolute: 'satisfied users'
    },
    description:'Best Fastfood in Noakhali'
}

const AllReviews = () => {

    return (
        <div>
            <ReviewsPage></ReviewsPage>
        </div>
    );
};

export default AllReviews;