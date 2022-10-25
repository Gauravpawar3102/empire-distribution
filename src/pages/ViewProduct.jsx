import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/usefetch';

function ViewProduct() {
  const { id } = useParams();
  const url = ' http://localhost:3000/products/' + id;
  const { isPending, data: product, error } = useFetch(url);
  return (
    <div className="container flex justify-center ">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {product && (
        <>
          <div className="product-card-container m-2 bg-gray-50 w-full   text-center ">
            {/* {console.log(product)} */}
            <div className="title">title:{product.title}</div>
            <div className="price">Price:{product.price}</div>
            <div className="quantity">120</div>
            <div className="asin">Asin</div>
            <div className="upc">upc</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ViewProduct;
