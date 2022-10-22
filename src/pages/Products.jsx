import React from 'react';
import ProductCard from '../components/ProductCard';
import { useFetch } from '../hooks/usefetch';

function Products() {
  const { data, isPending, error } = useFetch('http://localhost:3000/products');

  return (
    <div className="products-container">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <ProductCard products={data} />}
    </div>
  );
}

export default Products;
