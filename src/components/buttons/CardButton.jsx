"use client"
import React, { use, useState } from 'react';
import { CartContext } from '../../context/CartProvider';

const CardButton = ({food}) => {
const [inCart, setInCart]= useState(false)
const {addToCart} = use(CartContext)
const handleAddToCart = ()=>{
addToCart(food)
setInCart(true)
}

    return (
       <button disabled={inCart} onClick={handleAddToCart} className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 disabled:bg-gray-100 disabled:text-gray-600">
          {
            inCart ? "Added" : "Add to Cart"
          }
        </button>
    );
};

export default CardButton;