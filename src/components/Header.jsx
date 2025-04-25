import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-extrabold text-3xl text-orange-400 py-3 uppercase ">
        Online Shopping Cart
      </h2>
      <ul className=" flex flex-row">
        <li>
          <Link to={'/'} className="mx-5 hover:text-gray-400">
            HOME
          </Link>
        </li>
        <li>
          <Link to={'/cart'} className="mx-5 hover:text-gray-400">
            CART
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
