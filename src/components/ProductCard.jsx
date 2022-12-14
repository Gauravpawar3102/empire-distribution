import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ products }) {
  if (products.length === 0) {
    return <div className="error">No products to load ...</div>;
  }
  return (
    <div className="list flex flex-wrap justify-center">
      {products.map((product) => (
        <div className="product-card-container m-2 bg-gray-50 w-1/6  text-center ">
          {/* {console.log(product)} */}
          <div className="title">title:{product.title}</div>
          <div className="price">Price:{product.price}</div>
          <div className="quantity">120</div>
          <div className="asin">Asin</div>
          <div className="upc">upc</div>
          <Link
            className="bg-black text-white px-2 py-1 rounded-lg "
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
