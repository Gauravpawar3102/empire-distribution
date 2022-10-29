import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/usefetch';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
function Home() {
  const [homeData, setHomeData] = useState([]);
  // const { data, isPending, error } = useFetch('http://localhost:3000/home');

  useEffect(() => {
    getHomeData();
  }, []);
  const getHomeData = async () => {
    const homeCollectionRef = collection(db, 'home');
    const fetchHomeData = await getDocs(homeCollectionRef);
    setHomeData(
      fetchHomeData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  return (
    <div className="Home-page-container">
      {console.log(homeData)}
      {homeData.map((data) => {
        return (
          <div key={data.id}>
            <div className="hero-container  h-72 flex w-full ">
              <div className="hero-left2 flex flex-col p-8 content-between  h-full  w-1/3 ">
                <div className="hl-heading text-3xl font-medium ">
                  {data.heroheading}
                </div>
                <p className="hl-text font-small  py-3 ">
                  {data.heroparagraph.slice(0, 150) + '...'}
                </p>
              </div>
              <div className="hero-right w-2/3">
                <img
                  className="  h-full w-full object-contain"
                  src={data.heroimage}
                  alt="img"
                />
              </div>
            </div>
            <div className="our-mission-container flex w-full">
              <div className="mission-left w-2/3">
                <div className="ol-heading text-gray-700 text-3xl  ">
                  Our Mission
                </div>
                <p className="ol-text p-2">{data.ourmissionparagraph}</p>
              </div>
              <div className="mission-right w-1/3  text-center">
                <img
                  className="p-8 w-full object-contain"
                  src={data.ourmissionimage}
                  alt="img"
                />
              </div>
            </div>
            <div className="shop-by-products-container mb-8">
              <div className="sbp-top flex justify-end  ">
                <Link to="/products" className="font-mono font-bold text-xl">
                  Shop by Products ➡
                </Link>
              </div>
              <div className="sbp-bottom flex justify-center">
                {data.homeproducts.map((product) => (
                  <div
                    key={product.id}
                    className="product-card-container m-2  h-48  "
                  >
                    {/* {console.log(product)} */}
                    <img
                      className=" h-4/5 w-full object-contain"
                      src={product.image}
                      alt="img"
                    />
                    <div className="title w-full p-2 bg-black text-white mt-2">
                      {product.title.slice(0, 30) + '...'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
