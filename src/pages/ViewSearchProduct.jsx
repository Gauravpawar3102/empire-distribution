import React from 'react';
import { Link } from 'react-router-dom';

function ViewSearchProduct({ products }) {
  if (products.length === 0) {
    return <div className="error">No Results to Show ...</div>;
  }
  return (
    <div className="container flex flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card-container m-2 bg-gray-50 w-1/6  text-center "
        >
          {/* {console.log(product)} */}
          <img
            className="image h-40 w-full object-contain"
            src={product.img}
            alt="img"
          />
          <div className="title capitalize font-semibold ">{product.title}</div>
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
    </div>
  );
}

export default ViewSearchProduct;
