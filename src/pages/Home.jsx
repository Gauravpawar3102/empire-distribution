import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/usefetch';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
function Home() {
  const [homeData, setHomeData] = useState([]);
  const { data, isPending, error } = useFetch('http://localhost:3000/home');

  useEffect(() => {
    const homeCollectionRef = collection(db, 'home');
    const getHomeData = async () => {
      const fetchHomeData = await getDocs(homeCollectionRef);
      setHomeData(
        fetchHomeData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getHomeData();
  }, []);

  return (
    <div className="Home-page-container">
      {console.log(homeData)}
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {console.log(data)}
      {data && (
        <>
          <div className="hero-container bg-gray-50 h-60 flex w-full ">
            <div className="hero-left2 flex flex-col p-8 content-between  h-full  w-2/3 ">
              <div className="hl-heading text-3xl font-medium ">
                {data[0].heroheading}
              </div>
              <p className="hl-text font-small  py-3 ">
                {data[0].heroparagraph.slice(0, 150) + '...'}
              </p>
            </div>
            <div className="hero-right bg-red-200 w-1/3 text-center">image</div>
          </div>
          <div className="our-mission-container flex w-full">
            <div className="mission-left w-2/3">
              <div className="ol-heading text-gray-700 text-3xl  ">
                Our Mission
              </div>
              <p className="ol-text p-2 bg-cyan-50">{data[0].ourmission}</p>
            </div>
            <div className="mission-right w-1/3 bg-red-100 text-center">
              image
            </div>
          </div>
          <div className="shop-by-products-container">
            <div className="sbp-top flex justify-end ">
              <Link to="/products">Shop by Products ➡</Link>
            </div>
            <div className="sbp-bottom flex justify-center">
              {data[0].homeproducts.map((product) => (
                <div className="product-card-container m-2 bg-gray-100 h-48  ">
                  {/* {console.log(product)} */}
                  <img
                    className=" h-4/5 w-full object-cover"
                    src="https://empiredistributionusa.com/assets/images/product/267203988_%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82.jpg"
                    alt="img"
                  />
                  <div className="title h">{product.title}</div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="home-apply-account-container">
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
          </div> */}
          {/* <div className="home-products-grid">grid</div>
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
          </div> */}
        </>
      )}
    </div>
  );
}

export default Home;
