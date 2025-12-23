"use client";
import React, { use } from "react";
import { CartContext } from "../../../context/CartProvider";

const CartItems = () => {
  const { cart } = use(CartContext);
  return <div>{cart.length} Items added</div>;
};

export default CartItems;
