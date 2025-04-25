import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartCard from '../components/CartCard';

const Cart = () => {
  const [totalCart, SetTotalCart] = useState(0);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    SetTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);
  return (
    <div>
      <h1 className=" font-extrabold text-4xl text-purple-700 text-center my-10">
        YOUR CART
      </h1>
      {cart && cart.lenght ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map((cartItem) => (
              <CartCard cartItem={cartItem} />
            ))}
          </div>
          <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
            <p className="font-bold text-lg text-purple-700 ">
              Your Cart Summary
            </p>
            <p>
              <span className="text-gray-800 font-bold">Total Item</span>
              <span>:{cart.lenght}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Total Amount</span>
              <span>:{totalCart}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <p className="text-xl text-gray-600 mb-2">Your Cart is Empty</p>
          <Link to={'/'}>
            <button className="my-3 p-4 bg-gray-200 rounded-2xl hover:bg-gray-300 font-bold text-2xl">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
