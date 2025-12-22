import React from "react";

const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      {/* Title */}
      <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <div className="w-full h-[350px] bg-gray-300 rounded-xl"></div>

        {/* Info Skeleton */}
        <div className="space-y-4">
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="h-5 bg-gray-300 rounded w-1/4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>

          {/* Buttons Skeleton */}
          <div className="flex gap-4 pt-4">
            <div className="h-10 bg-gray-300 rounded w-32"></div>
            <div className="h-10 bg-gray-300 rounded w-40"></div>
          </div>
        </div>
      </div>

      {/* Extra Section Skeleton */}
      <div className="mt-10 border-t pt-6 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
