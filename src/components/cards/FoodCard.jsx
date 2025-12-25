import Link from 'next/link';
import React from 'react';
import CardButton from '../buttons/CardButton';
import style from '../../app/foods/Foods.module.css'
import Image from 'next/image';

const FoodCard = ({ food }) => {
  const { id,title, foodImg, price, category } = food;

  return (
    <div className={`border rounded-lg shadow-md p-4 ${style.bgred}`}>
      {/* Image */}
      {/* <img
        src={foodImg}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      /> */}

      <Image src={foodImg}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
        width={300}
        height={150}
        
        />

      {/* Info */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-md font-bold mt-1">৳ {price}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
  <Link href={`/foods/${id}`}>
        <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          View Details
        </button></Link>
<CardButton food={food}></CardButton>
      </div>
    </div>
  );
};

export default FoodCard;
