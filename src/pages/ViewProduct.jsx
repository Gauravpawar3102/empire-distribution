import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/usefetch';

function ViewProduct() {
  const { id } = useParams();
  const url = ' http://localhost:3000/products/' + id;
  const { isPending, data: product, error } = useFetch(url);
  return (
    <div className="container">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {product && (
        <>
          <h2 className="page-title">{product.title}</h2>
        </>
      )}
    </div>
  );
}

export default ViewProduct;
