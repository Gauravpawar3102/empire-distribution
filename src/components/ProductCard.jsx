import React from 'react';

function ProductCard({ products }) {
  if (products.length === 0) {
    return <div className="error">No products to load ...</div>;
  }
  return (
    <div className="list">
      {products.map((product) => (
        <div className="product-card-container m-2 bg-cyan-200">
          {console.log(product)}
          <div className="title">title:{product.title}</div>
          <div className="price">Price:{product.price}</div>
          <div className="quantity">120</div>
          <div className="asin">Asin</div>
          <div className="upc">upc</div>
        </div>
      ))}
      ;
    </div>
  );
}

export default ProductCard;
