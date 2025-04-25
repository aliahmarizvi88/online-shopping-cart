import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slice/cart-slice';

const ProductCard = ({ img, title, price, category }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = { img, title, price, category };
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(title));
  };

  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <li className="max-w-sm mx-auto bg-card text-card-foreground rounded-lg shadow-md overflow-hidden cursor-pointer">
        <img
          src={img}
          alt="Product Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className=" text-lg font-semibold truncate">{title}</p>
          <p className="text-muted-foregroundtext-primary text-gray-400 font-bold uppercase ">
            {category}
          </p>
          <div className="mt-4">
            <p>${price}</p>
            <button
              className="my-2 p-2 bg-gray-200 rounded-2xl hover:bg-gray-300"
              onClick={() =>
                cart.some((item) => item.title === title)
                  ? handleRemoveFromCart()
                  : handleAddToCart()
              }
            >
              {cart.some((item) => item.title === title)
                ? 'REMOVE FROM CART'
                : 'ADD TO CART'}
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ProductCard;
