import React from 'react';
import ReviewCardSkeleton from '../../components/skeletons/ReviewCardSkeleton';

const ReviewLoading = () => {
  return (
    <div>
      {
        [...Array(12)].map((_, index) => (
          <ReviewCardSkeleton key={index} />
        ))
      }
    </div>
  );
};

export default ReviewLoading;
