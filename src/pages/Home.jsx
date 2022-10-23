import React from 'react';
import { useFetch } from '../hooks/usefetch';

function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/home');
  return (
    <div className="Home-page-container">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {console.log(data)}
      {data && (
        <>
          <div className="hero-container bg-gray-50 h-60 flex w-full">
            <div className="hero-left2 w-2/3">
              <h1 className="hl-heading">{data[0].heroheading}</h1>
              <p className="hl-text">{data[0].heroparagraph}</p>
            </div>
            <div className="hero-right bg-red-200 w-1/3 ">image</div>
          </div>
          <div className="our-mission-container">
            <div className="mission-left">
              <div className="ol-heading">Our Mission</div>
            </div>
            <p className="ol-text">{data[0].ourmission}</p>
            <div className="mission-right">image</div>
          </div>
          <div className="shop-by-products-container">
            <div className="sbp-top">Shop by Products ➡</div>
            <div className="sbp-bottom flex justify-center">
              {data[0].homeproducts.map((product) => (
                <div className="product-card-container m-2 bg-cyan-200">
                  {console.log(product)}
                  <div className="title">title:{product.title}</div>
                  <div className="price">Price:{product.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="home-apply-account-container">
            <div className="haa-top">
              <div className="haa-heading">
                Empire Distribution USA is a B2B Wholesale Website
              </div>
              <div className="haa-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi earum culpa possimus accusantium, corporis suscipit
                provident maxime nulla optio recusandae ex vero consequatur.
              </div>
            </div>
            <div className="haa-bottom">
              <button className="haa-btn bg-blue-200">
                Apply for Wholesale account
              </button>
            </div>
          </div>
          <div className="home-products-grid">grid</div>
          <div className="home-news-container">
            <div className="hn-top">
              <div className="hn-heading">News</div>
            </div>
            <div className="hn-bottom">
              <div className="h-news-card h-30">
                <div className="img">image</div>
                <div className="date">Posted:2021-06-07 12:38:13</div>
                <h2 className="headline">
                  Technology Adaps to minimize impairments
                </h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
