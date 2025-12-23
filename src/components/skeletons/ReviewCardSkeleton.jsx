const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5 animate-pulse space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="space-y-2">
          <div className="w-32 h-3 bg-gray-300 rounded" />
          <div className="w-24 h-2 bg-gray-200 rounded" />
        </div>
      </div>

      <div className="w-24 h-3 bg-gray-300 rounded" />

      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded" />
        <div className="h-3 bg-gray-200 rounded" />
        <div className="w-3/4 h-3 bg-gray-200 rounded" />
      </div>

      <div className="w-20 h-3 bg-gray-300 rounded" />
    </div>
  );
};

export default ReviewCardSkeleton;
