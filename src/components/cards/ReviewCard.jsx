'use client'
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const ReviewCard = ({ reviewData }) => {
  const { user, photo, rating, review, likes, date } = reviewData;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 space-y-4">
      {/* user info */}
      <div className="flex items-center gap-3">
        {/* <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        /> */}
        <Image src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
          width={56}
          height={56}/>
        <div>
          <h3 className="font-semibold">{user}</h3>
          <p className="text-xs text-gray-500">
            {new Date(date).toDateString()}
          </p>
        </div>
      </div>

      {/* rating */}
      <div className="flex gap-1 text-yellow-500">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* review */}
      <p className="text-sm text-gray-700 leading-relaxed">{review}</p>

      {/* like */}
      <button
        onClick={handleLike}
        className="flex items-center gap-2 text-red-500"
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
        <span className="text-sm text-gray-600">{likeCount} likes</span>
      </button>
    </div>
  );
};

export default ReviewCard;
