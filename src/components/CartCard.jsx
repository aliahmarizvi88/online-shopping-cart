import React from 'react';

const CartCard = ({ cartItems }) => {
  return (
    <div>
      <div className="flex items-center p-5 justify-between bg-purple-700 mt-5 mb-2 rounded">
        <div className="flex p-3">
          <img src={cartItems?.image} alt={cartItems?.title} />
          <div className="ml-10 self-start space-y-5">
            <p className="text-xl text-white font-bold">{cartItems.title}</p>
            <p className="text-white font-extrabold">{cartItems.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
