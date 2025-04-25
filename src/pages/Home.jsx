import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Home = () => {
  let [products, setProducts] = useState([]);
  let [loading, isLoading] = useState(false);

  const fetchProductList = async () => {
    isLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      isLoading(false);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-extrabold text-4xl text-black text-center my-10">
        Products
      </h1>
      {loading ? (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <p className="text-xl text-gray-600 mb-2">Loading...</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
