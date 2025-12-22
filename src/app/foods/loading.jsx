import React from 'react';
import FoodCardSkeleton from '../../components/skeletons/FoodCardSkeleton';

const loading = () => {
    return (
        <div className='grid grid-cols-3'>
           {
            [...Array(12)].map((_, index)=> <FoodCardSkeleton key={index}></FoodCardSkeleton>)
           }
        </div>
    );
};

export default loading;