import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/usefetch';

function ViewProduct() {
  const { id } = useParams();
  const url = ' http://localhost:3000/products/' + id;
  const { isPending, data: product, error } = useFetch(url);
  return (
    <div className="container justify-center ">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {product && (
        <>
          <div
            key={product.id}
            className="product-card-container m-2   w-full h-full  p-4 text-left flex   items-center"
          >
            {/* {console.log(product)} */}
            <img
              className="image h-48 w-1/2 object-contain "
              src={product.img}
              alt="img"
            />
            <div className="details text-xl font-mono">
              <div className="title uppercase  font-semibold text-2xl ">
                {product.title}
              </div>
              <div className="price ">Price:${product.price} </div>
              <div className="brand">Brand: {product.brand}</div>
              <div className="quantity">MOQ: {product.quantity}</div>
              <div className="asin">Asin: {product.asin}</div>
              <div className="upc">upc: {product.upc}</div>
              <div className="buy bg-sky-400 text-white cursor-pointer text-2xl text-semibold p-2 text-center m-2  rounded-lg shadow-sm">
                Buy
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ViewProduct;
