import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-72 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-40 bg-gray-300 rounded-md"></div>

      {/* Text Skeleton */}
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </div>

      {/* Button Skeleton */}
      <div className="flex gap-3 mt-5">
        <div className="h-9 bg-gray-300 rounded flex-1"></div>
        <div className="h-9 bg-gray-300 rounded flex-1"></div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
