import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ products }) {
  if (products.length === 0) {
    return <div className="error">No products to load ...</div>;
  }
  return (
    <div className="list flex flex-wrap justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card-container m-2 bg-gray-50 w-1/5  text-center p-4"
        >
          {/* {console.log(product)} */}
          <img
            className="image h-40 w-full object-contain"
            src={product.img}
            alt="img"
          />
          <div className="title capitalize font-semibold ">{product.title}</div>
          <div className="price ">Price:${product.price} </div>
          <div className="brand">Brand: {product.brand}</div>
          <div className="quantity">MOQ: {product.quantity}</div>
          <div className="asin">Asin: {product.asin}</div>
          <div className="upc">upc: {product.upc}</div>

          <Link
            className="bg-blue-400  text-white cursor-pointer text-2xl text-semibold px-2 text-center mt-2  rounded-lg shadow-sm "
            to={`/product/${product.id}`}
          >
            view
          </Link>
        </div>
      ))}
      ;
    </div>
  );
}

export default ProductCard;
