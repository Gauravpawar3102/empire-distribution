import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/usefetch';
import ViewSearchProduct from './ViewSearchProduct';

function SearchProduct() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url = 'http://localhost:3000/products?q=' + query;
  const { data, isPending, error } = useFetch(url);
  return (
    <div className="search-product">
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <ViewSearchProduct products={data} />}
    </div>
  );
}

export default SearchProduct;
